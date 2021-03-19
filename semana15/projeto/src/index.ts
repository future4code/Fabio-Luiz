import express, { Request, Response } from "express";
import cors from "cors";

import { AddressInfo } from "net";
import { userType, users, opList, extractType } from "./data";
import { findAge, checkName, checkCpf, dateToString } from "./functions";

const app = express();

app.use(express.json());
app.use(cors());

let errorCode: number = 400;
// Criar Conta -----------------------------------------
app.post("/accounts/create", (req: Request, res: Response) => {
  try {
    const body: userType = req.body;
    const userAge = findAge(body.birthdate);

    // Verifica se todos os campos foram preenchidos
    if (!body.name || !body.cpf || !body.birthdate) {
      errorCode = 422;
      throw new Error("Missing parameters. Please, check your data");
    }

    // Verifica idade
    if (userAge < 18) {
      errorCode = 401;
      throw new Error("You are under 18. Your register is unauthorized");
    }

    // Verifica formatação do nome (nome + sobrenome)
    if (!checkName(body.name)) {
      errorCode = 422;
      throw new Error(
        "Invalid name type. Please fill your name and surname correctly. (At least 2 letters each)"
      );
    }

    // Verifica formatação da data
    if (isNaN(Date.parse(body.birthdate))) {
      errorCode = 422;
      throw new Error("Invalid date type. Please use the format YYYY/MM/DD");
    }

    // Verifica se CPF é válido
    if (!checkCpf(body.cpf)) {
      errorCode = 422;
      throw new Error("Invalid cpf. Please, check your data");
    }

    // Verifica se CPF já está cadastrado
    const findCpf = users.find((usr) => usr.cpf === body.cpf);
    if (findCpf) {
      throw new Error(
        "This cpf is already registered. Please, check your data"
      );
    }

    // Cria usuário novo
    const newUser: userType = {
      id: Number(new Date()),
      name: body.name,
      cpf: body.cpf,
      birthdate: body.birthdate,
      balance: 0,
      extract: [],
    };

    // Adiciona usuário na base de dados
    users.push(newUser);
    res
      .status(201)
      .send({ message: "User successfully registered!", user: newUser });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

// Pegar saldo -----------------------------------------
app.get("/accounts/search", (req: Request, res: Response) => {
  try {
    const userName = req.query.name as string;
    const userCpf = Number(req.query.cpf);
    const nameIndex = users.findIndex((usr) => {
      return usr.name.toLocaleLowerCase() === userName.toLocaleLowerCase();
    });
    const cpfIndex = users.findIndex((usr) => {
      return usr.cpf === userCpf;
    });

    // Verifica se nome e CPF correspondem com alguém da base de dados
    // Se CPF e nome não corresponderem a um mesmo usuário
    if (nameIndex >= 0 && cpfIndex >= 0 && nameIndex !== cpfIndex) {
      errorCode = 404;
      throw new Error(
        "No users with this name and cpf. Please, check your data"
      );
    }
    //Se apenas uma das informações corresponder a um mesmo usuário
    if ((nameIndex >= 0 && cpfIndex < 0) || (nameIndex < 0 && cpfIndex >= 0)) {
      throw new Error("Name and cpf does not match. Please, check your data");
    }
    // Retorna saldo
    const balance = users[nameIndex].balance.toString();
    res.status(200).send({ name: userName, balance: balance });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

// Adicionar saldo -----------------------------------------
app.post("/accounts/deposit", (req: Request, res: Response) => {
  try {
    const body = req.body
    const userName = body.name;
    const userCpf = body.cpf;
    const opDate: string = dateToString(new Date());
    const valueIn = body.opValue;
    const nameIndex = users.findIndex((usr) => {
      return usr.name.toLocaleLowerCase() === userName.toLocaleLowerCase();
    });
    const cpfIndex = users.findIndex((usr) => {
      return usr.cpf === userCpf;
    });

    //Verifica se o valor inserido é válido
    if (isNaN(valueIn) || valueIn < 0) {
      errorCode = 422;
      throw new Error(
        "Invalid value. Please, enter a postive number higher than 0"
      );
    }

    // Verifica se nome e CPF correspondem com alguém da base de dados
    // Se CPF e nome não corresponderem a um mesmo usuário
    if (nameIndex >= 0 && cpfIndex >= 0 && nameIndex !== cpfIndex) {
      throw new Error(
        "No users with this name and cpf. Please, check your data"
      );
    }

    //Se apenas uma das informações corresponder a um mesmo usuário
    if ((nameIndex >= 0 && cpfIndex < 0) || (nameIndex < 0 && cpfIndex >= 0)) {
      throw new Error("Name and cpf does not match. Please, check your data");
    }

    // Atualizar saldo
    const transactionIn: extractType = {
      id: Number(Date.parse(Date()).toString().split("").reverse().join("")),
      operation: opList.IN,
      opValue: valueIn,
      date: opDate,
      description: "Depósito",
    };
    users[cpfIndex].balance += valueIn;
    users[cpfIndex].extract.push(transactionIn);
    res.status(201).send({
      message: "Success!",
      user: { name: userName, balance: users[cpfIndex].balance },
    });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

//  Pagar conta -----------------------------------------
app.post("/accounts/:id/payment", (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.id);
    const body = req.body;
    const userDateToNumber = Date.parse(body.date);
    let billDate: string;

    // Verifica se o id do usuário está correto
    const userIndex = users.findIndex((usr) => {
      return usr.id === userId;
    });
    if (userIndex < 0) {
      errorCode = 404;
      throw new Error("User not found. Please check the id");
    }

    // Verificação de data
    // Verifica se data foi inserida. Se não, usa o dia de hoje
    if (!body.date) {
      billDate = dateToString(new Date());
    } else {
      billDate = body.date;
    }
    // Verifica formatação da data
    if (isNaN(Date.parse(body.date))) {
      errorCode = 422;
      throw new Error("Invalid date type. Please use the format YYYY/MM/DD");
    }
    // Verifica se a data é futura
    const todayDate = Number(
      new Date().getFullYear().toString() +
        new Date().getMonth().toString() +
        new Date().getDate().toString()
    );
    const userDate = Number(
      new Date(userDateToNumber).getFullYear().toString() +
        new Date(userDateToNumber).getMonth().toString() +
        new Date(userDateToNumber).getDate().toString()
    );
    if (userDate < todayDate) {
      errorCode = 422;
      throw new Error("Invalid date. Plase, choose a future date or today");
    }

    // Verifica se todos os campos obrigatórios foram preenchidos
    if (!body.opValue || !body.description) {
      errorCode = 422;
      throw new Error("Missing parameters. Please, check your data");
    }

    // Verifica se a descrição tem pelo menos 4 caracteres
    const descriptionTest = /^.{3,}/.test(body.description);
    if (!descriptionTest) {
      errorCode = 422;
      throw new Error("Description must has at least 3 characters");
    }

    // Verifica se o valor inserido é válido
    if (isNaN(body.opValue) || body.opValue < 0) {
      errorCode = 422;
      throw new Error(
        "Invalid value. Please, enter a postive number higher than 0"
      );
    }

    // Verifica se há saldo para a operação
    if (userIndex >= 0 && users[userIndex].balance < body.opValue) {
      errorCode = 422;
      throw new Error("insufficient balance to carry out the operation");
    }

    //Adiciona a operação na base de dados
    const transaction: extractType = {
      id: Number(Date.parse(Date()).toString().split("").reverse().join("")),
      operation: opList.OUT,
      opValue: body.opValue,
      date: billDate,
      description: body.description,
    };
    users[userIndex].balance -= body.opValue;
    users[userIndex].extract.push(transaction);
    res
      .status(201)
      .send({ message: "Operation done successfully", transaction });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

// Fazer transferência
app.post("/accounts/:id/transfer", (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.id);
    const body = req.body;
    const transferDate: string = dateToString(new Date());
    const userIndex = users.findIndex((usr) => {
      return usr.id === userId;
    });

    // Verifica se o id do usuário está correto
    if (userIndex < 0) {
      errorCode = 404;
      throw new Error("User not found. Please check the id");
    }

    // Verifica se todos os campos obrigatórios foram preenchidos
    if (
      !body.senderName ||
      !body.senderCpf ||
      !body.recipientName ||
      !body.recipientCpf ||
      !body.transferValue
    ) {
      errorCode = 422;
      throw new Error("Missing parameters. Please, check your data");
    }

    // Verifica se o valor inserido é válido
    if (isNaN(body.transferValue) || body.opValue < 0) {
      errorCode = 422;
      throw new Error(
        "Invalid value. Please, enter a postive number higher than 0"
      );
    }

    // Verifica se há saldo para a operação
    if (userIndex >= 0 && users[userIndex].balance < body.transferValue) {
      errorCode = 422;
      throw new Error("insufficient balance to carry out the operation");
    }

    //Verifica dados do destinatário
    const recipientNameIndex = users.findIndex((usr) => {
      return (
        usr.name.toLocaleLowerCase() === body.recipientName.toLocaleLowerCase()
      );
    });
    const recipientCpfIndex = users.findIndex((usr) => {
      return usr.cpf === body.recipientCpf;
    });
    if (recipientNameIndex < 0) {
      throw new Error("Name not found. Please, check your data");
    }
    if (recipientCpfIndex < 0) {
      throw new Error("Cpf not found. Please, check your data");
    }
    if (
      recipientNameIndex >= 0 &&
      recipientCpfIndex >= 0 &&
      recipientNameIndex !== recipientCpfIndex
    ) {
      throw new Error(
        "Name and cpf of recipient does not match. Please, check your data"
      );
    }

    //Adiciona a operação na base de dados
    const transactionIn: extractType = {
      id: Number(Date.parse(Date()).toString().split("").reverse().join("")),
      operation: opList.IN,
      opValue: body.transferValue,
      date: transferDate,
      description: "Transferência",
    };
    const transactionOut: extractType = {
      id:
        Number(Date.parse(Date()).toString().split("").reverse().join("")) + 1,
      operation: opList.OUT,
      opValue: body.transferValue,
      date: transferDate,
      description: "Transferência",
    };
    users[userIndex].balance -= body.transferValue;
    users[userIndex].extract.push(transactionOut);
    users[recipientCpfIndex].balance += body.transferValue;
    users[recipientCpfIndex].extract.push(transactionIn);
    res.status(201).send({
      message: "Operation done successfully",
      transaction: {
        Date: transferDate,
        value: body.transferValue,
        from: body.senderName,
        to: body.recipientName,
      },
    });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

app.get("/users/all", (req: Request, res: Response) => {
  try {
    res.send(users);
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

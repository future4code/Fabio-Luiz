import express, { Request, Response } from "express";
import cors from "cors";

import { UserType, user as stdUser, users } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

const PORT: number = Number(process.env.PORT) || 3003;
let errorCode: number = 400;

// Exercicio 1
// a. Qual método HTTP você deve utilizar para isso?
//    R.: Método GET
// b. Como você indicaria a entidade que está sendo manipulada?
//    R.: Através do parâmetro 'path'
app.get("/users/all", (req: Request, res: Response) => {
  try {
    if (users.length < 1) {
      throw new Error("The data is empty");
    }
    res.status(201).send(users);
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

// Exercicio 2
// a. Como você passou os parâmetros de type para a requisição? Por quê?
//    R.: Através do comando req.query pois permite fazer requisições para a API sem necessidade de body.
// b. Você consegue pensar em um jeito de garantir que apenas `types` válidos sejam utilizados?
//    R.: Utilizei um if com a condição type in UserType para que só retorne true caso o type inputado corresponda a algum item da lista enum
app.get("/users", (req: Request, res: Response) => {
  try {
    const type = req.query.type as string;
    const filteredUsers = users.filter((user) => {
      return user.type.toLocaleLowerCase().includes(type.toLocaleLowerCase());
    });
    if (type in UserType) {
      if (filteredUsers.length < 1) {
        errorCode = 404;
        throw new Error("Users not found");
      }
      res.status(201).send(filteredUsers);
    } else {
      errorCode = 400;
      throw new Error("Invalid Type. Please, try another option");
    }
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

// Exercicio 3
// a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?
//    R.: Path parameter
// b. Altere este endpoint para que ele devolva uma mensagem de erro caso nenhum usuário tenha sido encontrado.
app.get("/users/:name", (req: Request, res: Response) => {
  const name = req.params.name as string;
  try {
    const user = users.find((usr) => {
      return usr.name.toLocaleLowerCase() === name.toLocaleLowerCase();
    });
    if (!user) {
      errorCode = 404;
      throw new Error("User not found");
    }
    res.status(201).send(user);
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

// Exercicio 4
// a. Mude o método do endpoint para `PUT`. O que mudou?
//    R.: Se eu inserir informações já existentes, ele simplesmente altera as informações de um objeto já existente ao invés de criar um novo
// b. Você considera o método `PUT` apropriado para esta transação? Por quê?
//    R.: Não, pois o método PUT é aconselhado apenas para edição de informações e não para criação.
app.post("/users/create", (req: Request, res: Response) => {
  try {
    const body = req.body;
    if (!body.name || !body.email || !body.type || !body.age) {
      errorCode = 401;
      throw new Error("Missing parameters. Please check your informations");
    }
    const findName = users.find((usr) => {
      return usr.name === body.name;
    });
    const findEmail = users.find((usr) => {
      return usr.email === body.email;
    });
    if (findName) {
      errorCode = 401;
      throw new Error(
        "This user is already registered. Please choose another name"
      );
    }
    if (findEmail) {
      errorCode = 401;
      throw new Error(
        "This e-mail is already registered. Please choose another e-mail"
      );
    }
    if (body.type in UserType) {
      const newUser: stdUser = {
        id: Number(new Date()),
        name: body.name,
        email: body.email,
        type: body.type,
        age: body.age,
      };
      users.push(newUser);
      res.status(201).send({ message: "Success!", newUser });
    } else {
      errorCode = 401;
      throw new Error("Invalid type. Plese, check your informations");
    }
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

// Exercicio 5
app.put("/users/edit/:username", (req: Request, res: Response) => {
  try {
    const username = req.params.username as string;
    const name = req.query.name as string;
    const findName = users.find((usr) => {
      return usr.name.toLocaleLowerCase() === name.toLocaleLowerCase();
    });
    if (findName) {
      throw new Error("This name exists already. Please, try another name");
    }
    const index = users.findIndex((usr) => {
      return usr.name.toLocaleLowerCase() === username.toLocaleLowerCase();
    });
    users[index].name = name + "-ALTERADO";
    res.status(201).send({ message: "Success!", user: users[index] });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

// Exercicio 6

// Exercicio 7

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});

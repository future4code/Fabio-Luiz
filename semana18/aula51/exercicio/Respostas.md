### Exercicio 1

#####a)
round - Define o custo operacional para a encriptação da senha ```BCRYPT_COST```.
salt - Resultado da operação realizada com o algoritmo para realizar a encriptação da senha.
Para round, recomenda-se usar o maior valor possível para que se obtenha resposta na velocidade desejada pois quanto maior o round, mais segura é a encriptação. O valor usado no exercício foi 12 pois é o mais geral e recomendado pela lib.

##### b)
```
import * as bcrypt from "bcryptjs";

export const hashPass = async (s:string): Promise<string> => {
    const rounds: number = Number(process.env.BCRYPT_COST);
    if(isNaN(Number(process.env.BCRYPT_COST))){
        throw new Error("Cost must be a number");
    }
    const salt = await bcrypt.genSalt(rounds);
    const result = await bcrypt.hash(s, salt);
    return result;
}
```

##### c)
```
import * as bcrypt from "bcryptjs";

export const comparePass = (s: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(s, hash);
}
```

### Exercicio 2

##### a)
O cadastro deve ser modificado primeiramente pois a senha armazenada no banco de dados precisas er a criptografada e este será o valor usado para validar a senha, não seu valor original.

##### b)
```
import { Request, Response } from "express";
import createUser from "../data/createUser";
import { generateId } from "../services/generateId";
import { generateToken } from "../services/authenticator";
import validateEmail from "../services/validateEmail";
import getUserByEmail from "./../data/getUserByEmail";
import { hashPass } from "./../services/hashManager";

type signUpBody = {
  email: string;
  password: string;
};

const signUp = async (req: Request, res: Response) => {
  try {
    const id: string = generateId();
    const { email, password } = req.body as signUpBody;

    if (!email || !password) {
      res.statusCode = 422;
      throw new Error("'email' and 'password' fields are mandatory!");
    }

    if (password.length < 6) {
      res.statusCode = 422;
      throw new Error("'password' must be at least 6 characters!");
    }

    if (!validateEmail(email)) {
      res.statusCode = 422;
      throw new Error("Invalid E-mail type!");
    }

    const user = await getUserByEmail(email);
    if (user) {
      res.statusCode = 409;
      throw new Error(`${email} already registered!`);
    }

    const token = generateToken({ id });

    const cypherPassword = await hashPass(password);

    await createUser(id, email, cypherPassword);

    res.status(201).send({ token });
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: "Internal server error" });
    } else {
      res.status(res.statusCode).send({ message: error.message });
    }
    res.status(res.statusCode).send({ message: error.message });
  }
};

export default signUp;

```

##### c)
```
import { Request, Response } from "express";
import {generateToken} from "../services/authenticator";
import validateEmail from '../services/validateEmail';
import getUserByEmail from '../data/getUserByEmail';
import { comparePass } from "../services/hashManager";

type loginBody = {
  email: string;
  password: string;
};

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body as loginBody;

    if (!email || !password) {
      res.statusCode = 422;
      throw new Error("'email' and 'password' fields are mandatory!");
    }

    if(password.length < 6){
      res.statusCode = 422;
      throw new Error("'password' must be at least 6 characters!");
    }

    if(!validateEmail(email)){
      res.statusCode = 422;
      throw new Error("Invalid E-mail type!");
    }

    const user = await getUserByEmail(email)
    
    if(!user){
      res.statusCode = 404;
      throw new Error(`This E-mail is not registered!`);
    }

    const passwordIsCorrect = await comparePass(password, user?.password);

    if (!passwordIsCorrect) {
      res.statusCode = 404;
      throw new Error(`Invalid password!`);
    }

    const token = generateToken({ id: user.id });
    res.status(201).send({ token });
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: "Internal server error" });
    } else {
      res.status(res.statusCode).send({ message: error.message });
    }
  }
};

export default login;
```

##### d)
O endpoint ```user/profile``` não precisa ser editado pois ele apenas recebe informação acerca do id do usuário, não tendo sua funcionalidade alterada pela inserção dos dados novos nas funções de manipulação do token.

### Exercicio 3

##### a)
```
ALTER TABLE User ADD COLUMN role VARCHAR(255) NOT NULL DEFAULT "normal";
```

##### b)
```
export type AuthenticationData = {
  id: string;
  role: string;
};
```

##### c)
```
import { Request, Response } from "express";
import createUser from "../data/createUser";
import { generateId } from "../services/generateId";
import { generateToken } from "../services/authenticator";
import validateEmail from "../services/validateEmail";
import getUserByEmail from "./../data/getUserByEmail";
import { hashPass } from "./../services/hashManager";

type signUpBody = {
  email: string;
  password: string;
  role: string;
};

const signUp = async (req: Request, res: Response) => {
  try {
    const id: string = generateId();
    const { email, password, role } = req.body as signUpBody;

    if (!email || !password || !role) {
      res.statusCode = 422;
      throw new Error("'email', 'password' and 'role' fields are mandatory!");
    }

    if (password.length < 6) {
      res.statusCode = 422;
      throw new Error("'password' must be at least 6 characters!");
    }

    if (role.toLowerCase() !== "normal" && role.toLowerCase() !== "admin") {
      res.statusCode = 422;
      throw new Error(`'role' field can accept: 'NORMAL' or 'ADMIN'`);
    }

    if (!validateEmail(email)) {
      res.statusCode = 422;
      throw new Error("Invalid E-mail type!");
    }

    const user = await getUserByEmail(email);
    if (user) {
      res.statusCode = 409;
      throw new Error(`${email} already registered!`);
    }

    const token = generateToken({ id, role });

    const cypherPassword = await hashPass(password);

    await createUser(id, email, cypherPassword, role);

    res.status(201).send({ token });
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: "Internal server error" });
    } else {
      res.status(res.statusCode).send({ message: error.message });
    }
    res.status(res.statusCode).send({ message: error.message });
  }
};

export default signUp;
```

### Exercicio 4
##### a)
```
import { Request, Response } from "express";
import { getTokenData } from "../services/authenticator";
import { AuthenticationData } from "../types";
import getUserById from "./../data/getUserById";
import connection from "./../connection";

const getProfile = async (req: Request, res: Response) => {
  try {
    const token: string = req.headers.authorization!;
    const tokenData: AuthenticationData | null = getTokenData(token);
    if (!tokenData || tokenData.role !== "NORMAL") {
      res.statusCode = 401;
      throw new Error("Unauthorized!");
    }
    const user:any = await connection("User").where({ id: tokenData.id });
    res.status(201).send({ email: user[0].email });
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: "Internal server error" });
    } else {
      res.status(res.statusCode).send({ message: error.message });
    }
  }
};

export default getProfile;
```

### Exercicio 5

```
import { Request, Response } from "express";
import { getTokenData } from "../services/authenticator";
import { AuthenticationData } from "../types";
import connection from "./../connection";

const deleteProfile = async (req: Request, res: Response) => {
  try {
    const id:string = req.params.id;
    const token: string = req.headers.authorization!;
    const tokenData: AuthenticationData | null = getTokenData(token);

    if (!tokenData || tokenData.role !== "ADMIN") {
      res.statusCode = 401;
      throw new Error("Unauthorized!");
    }
    await connection("User").delete().where({ id });
    res.status(201).send({ message: "User deleted!" });
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: "Internal server error" });
    } else {
      res.status(res.statusCode).send({ message: error.message });
    }
  }
};

export default deleteProfile;
```

### Exercicio 6

```
import { Request, Response } from "express";
import { getTokenData } from "../services/authenticator";
import { AuthenticationData } from "../types";
import connection from "./../connection";

const getProfile = async (req: Request, res: Response) => {
  try {
    const token: string = req.headers.authorization!;
    const tokenData: AuthenticationData | null = getTokenData(token);
    if (!tokenData) {
      res.statusCode = 401;
      throw new Error("Unauthorized!");
    }
    const user:any = await connection("User").where({ id: tokenData.id });
    res.status(201).send({ id: user[0].id, email: user[0].email });
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: "Internal server error" });
    } else {
      res.status(res.statusCode).send({ message: error.message });
    }
  }
};

export default getProfile;
```
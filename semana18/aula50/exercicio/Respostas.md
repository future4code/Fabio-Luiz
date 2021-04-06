### Exercicio 1

#####a)
Strings são melhores que números pois possuem mais combinações de caracteres e formação de conjuntos mais longos, ampliando assim quantidade de ids possíveis.

##### b)
```
import { v4 } from "uuid";
export const generateId = (): string => {
  return v4();
};
```

### Exercicio 2

##### a)
Inicialmente o código possui as credencais para acessar o banco de dados. Em seguida a função ```createUser``` cria uma nova linha na tabela ```userTableName```

##### b)
```
CREATE TABLE User (
		id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```

##### c)
```
import connection from '../connection';

const createUser = async (
  id: string,
  password: string,
  email: string
): Promise<void> => {
  await connection.raw(`
    INSERT INTO User(id, email, password) 
    VALUES("${id}", "${email}", "${password}")
    `);
};

export default createUser;
```

### Exercicio 3

##### a)
Como ```JWT_KEY``` pode assumir valor ```null``` caso nada seja inserido no arquivo ```.env```, ao adicionar ```as string``` garantimos que o valor que chegará na variável será uma string.

##### b)
```
import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { AuthenticationData } from "../types";

dotenv.config();

export const generateToken = (payload: AuthenticationData): string => {
  const token = jwt.sign(payload, process.env.JWT_KEY!, { expiresIn: "1y" });
  return token;
};
```

### Exercicio 4
##### a/b/c)
```
import { Request, Response } from "express";
import createUser from "../data/createUser";
import { generateId } from "../services/generateId";
import {generateToken} from "../services/authenticator";
import validateEmail from '../services/validateEmail';
import getUserByEmail from './../data/getUserByEmail';

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

    if(password.length < 6){
      res.statusCode = 422;
      throw new Error("'password' must be at least 6 characters!");
    }

    if(!validateEmail(email)){
      res.statusCode = 422;
      throw new Error("Invalid E-mail type!");
    }

    const user = await getUserByEmail(email);
    if (user) {
      res.statusCode = 409;
      throw new Error(`${email} already registered!`);
    }

    const token = generateToken({ id });

    await createUser(id, password, email);
    
    res.status(201).send({ token });
  } 
  catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: "Internal server error" });
    } 
    else {
      res.status(res.statusCode).send({ message: error.message });
    }
    res.status(res.statusCode).send({ message: error.message });
  }
};

export default signUp;

```

### Exercicio 5

##### a)
```
import connection from "../connection";
import { UserType } from "../types";

const getUserByEmail = async (email: string): Promise<UserType> => {
  const result = await connection.raw(`
    SELECT * FROM User WHERE email = "${email}"
    `);
    return result[0][0]
};

export default getUserByEmail;
```

### Exercicio 6

##### a/b)

```
import connection from "../connection";
import { UserType } from "../types";

const getUserByEmail = async (email: string): Promise<UserType> => {
  const result = await connection.raw(`
    SELECT * FROM User WHERE email = "${email}"
    `);
    return result[0][0]
};

export default getUserByEmail;
```

### Exercicio 7

##### a)
O uso do ```as any``` garante a aceitação de qualquer valor para a variável ```payload``` já que esse possui formatos variáveis.

##### b)
```
export const getTokenData = (token: string): AuthenticationData | null => {
  try {
    const { id } = jwt.verify(
      token,
      process.env.JWT_KEY!
    ) as AuthenticationData;
    return { id };
  } catch (error) {
    console.log(error.message);
    return null;
  }
};
```

### Exercicio 8

##### a)
```
import connection from "../connection";
import { UserType } from "../types";

const getUserById = async (id: string): Promise<UserType> => {
  const result = await connection.raw(`
    SELECT * FROM User WHERE id = "${id}"
    `);
  return result[0][0];
};

export default getUserById;
```

##### b)
```
import { Request, Response } from "express";
import { getTokenData } from "../services/authenticator";
import getUserById from "./../data/getUserByEmail";

const getProfile = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;
    const authorization = getTokenData(token);

    if (!authorization) {
      res.statusCode = 401;
      throw new Error("Unauthorized!");
    }

    const user = await getUserById(authorization.id);

    res.status(201).send({ user: user.id, password: user.password });
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
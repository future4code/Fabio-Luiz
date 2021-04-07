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

    const token = generateToken({ id: user.id, role: user.role });
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

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

import { Request, Response } from "express";
import { loginInputs } from "../models/users";
import login_B from './../business/login_B';

const login = async (req: Request, res: Response):Promise<void> => {
  try {
    // Campos do body
    const { email, password }: loginInputs = req.body;

    // Gerando token
    const token = await login_B({email, password});

    res.status(200).send({status: "Success!", token: token})

  } catch (error) {
    res.status(res.statusCode).send({ message: error.message });
  }
};

export default login;

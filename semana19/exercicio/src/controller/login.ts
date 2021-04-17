import { Request, Response } from "express";
import { loginInputs } from "../models/user";
import B_login from './../business/B_login';

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body as loginInputs;

    const token = await B_login({ email, password });

    res.status(201).send({ token });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export default login;

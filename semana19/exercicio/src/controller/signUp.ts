import { Request, Response } from "express";
import { signUpInputs } from "../models/user";
import B_signUp from '../business/B_signUp';

const signUp = async (req: Request, res: Response) => {
  try {
    const { email, password, role = "NORMAL"} = req.body as signUpInputs;

    const token = await B_signUp({ email, password, role });

    res.status(201).send({ token });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export default signUp;

import { Request, Response } from "express";
import signUp_B from './../business/signUp_B';
import { signUpDTO, strToRole, userRoles } from "../models/users";

const signUp = async (req: Request, res: Response) => {
  try {
    // Campos do body
    const {
      email,
      name,
      password,
      role = userRoles.NORMAL,
    } = req.body as signUpDTO;

    // Gerando Token
    const token = await signUp_B({ email, name, password, role: strToRole(role)});
    console.log('token', token)
    res.status(201).send({ status: "Success!", token: token });
  } catch (error) {
    res.status(res.statusCode).send({ message: error.message });
  }
};

export default signUp;

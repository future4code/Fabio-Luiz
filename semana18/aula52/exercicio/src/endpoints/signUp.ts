import { Request, Response } from "express";
import createUser from "../data/createUser";
import { generateId } from "../services/generateId";
import { generateToken } from "../services/authenticator";
import validateEmail from "../services/validateEmail";
import getUserByEmail from "./../data/getUserByEmail";
import { hashPass } from "./../services/hashManager";
import { AddressType, signUpBody } from "../types";
import createAddress from './../data/createAddress';
import getAddress from "../services/getAddress";



const signUp = async (req: Request, res: Response) => {
  try {
    const id: string = generateId();
    const { email, password, role = "normal", cep, number, complement="" } = req.body as signUpBody;

    if (!email || !password || !cep || !number) {
      res.statusCode = 422;
      throw new Error("'email', 'password', 'cep' and 'number' fields are mandatory!");
    }

    if (password.length < 6) {
      res.statusCode = 422;
      throw new Error("'password' must be at least 6 characters!");
    }

    if (role && role.toLowerCase() !== "normal" && role && role.toLowerCase() !== "admin") {
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

    const address:any = await getAddress(cep)
    if(!address.street){
      res.statusCode = 404;
      throw new Error(`'cep' ${cep} is invalid!`);
    }

    const token = generateToken({ id, role });

    const cypherPassword = await hashPass(password);

    await createUser(id, email, cypherPassword, role);
    await createAddress(
      id,
      cep,
      address?.street,
      number,
      complement, 
      address?.neighbourhood,
      address?.city,
      address?.state
    );

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

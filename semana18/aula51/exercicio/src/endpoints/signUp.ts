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

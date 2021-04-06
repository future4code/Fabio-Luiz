import { Request, Response } from "express";
import { getTokenData } from "../services/authenticator";
import { AuthenticationData } from "../types";
import getUserById from "./../data/getUserByEmail";
import connection from './../connection';

const getProfile = async (req: Request, res: Response) => {
  try {
    const token: string = req.headers.authorization!;
    const tokenData: AuthenticationData | null = getTokenData(token);

    if (!tokenData) {
      res.statusCode = 401;
      throw new Error("Unauthorized!");
    }
    const user:any = await connection("User").where({ id: tokenData.id });
    res.status(201).send({ user: user[0].email, password: user[0].password });
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: "Internal server error" });
    } else {
      res.status(res.statusCode).send({ message: error.message });
    }
  }
};

export default getProfile;

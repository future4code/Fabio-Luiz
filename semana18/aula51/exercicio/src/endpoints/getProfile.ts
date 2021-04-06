import { Request, Response } from "express";
import { getTokenData } from "../services/authenticator";
import { AuthenticationData } from "../types";
import connection from "./../connection";

const getProfile = async (req: Request, res: Response) => {
  try {
    const token: string = req.headers.authorization!;
    const tokenData: AuthenticationData | null = getTokenData(token);

    if (!tokenData) {
      res.statusCode = 401;
      throw new Error("Unauthorized!");
    }

    // const user: any = await getUserById(tokenData.id);
    const user:any = await connection("User").where({ id: tokenData.id });
    // res.send(user);
    res.status(201).send({ id: user[0].id, email: user[0].email });
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: "Internal server error" });
    } else {
      res.status(res.statusCode).send({ message: error.message });
    }
  }
};

export default getProfile;

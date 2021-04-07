import { Request, Response } from "express";
import { getTokenData } from "../services/authenticator";
import { AuthenticationData } from "../types";
import deleteUserById from "./../data/deleteUserById";
import connection from "./../connection";

const deleteProfile = async (req: Request, res: Response) => {
  try {
    const id:string = req.params.id;
    const token: string = req.headers.authorization!;
    const tokenData: AuthenticationData | null = getTokenData(token);

    if (!tokenData || tokenData.role !== "ADMIN") {
      res.statusCode = 401;
      throw new Error("Unauthorized!");
    }

    // await deleteUserById(tokenData.id);
    await connection("User").delete().where({ id });
    res.status(201).send({ message: "User deleted!" });
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: "Internal server error" });
    } else {
      res.status(res.statusCode).send({ message: error.message });
    }
  }
};

export default deleteProfile;

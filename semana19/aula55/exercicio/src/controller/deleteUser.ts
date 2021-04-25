import { Request, Response } from "express";
import { getTokenData } from "../services/authenticator";
import { authenticationData } from "../models/auth";
import deleteUser_B from "../business/deleteUser_B";

const deleteUser = async (req: Request, res: Response):Promise<void> => {
  try {
    const { id } = req.body;
    const token: string = req.headers.authorization!;
    const tokenData: authenticationData | null = getTokenData(token);

    if (!tokenData || tokenData?.role !== "admin") {
      res.statusCode = 401;
      throw new Error("Unauthorized!");
    }

    // Enviando pro BD
    await deleteUser_B(id);

    res.status(200).send({ status: "Success!", message: "User removed!" });
  } catch (error) {
    res.status(res.statusCode).send({ message: error.message });
  }
};

export default deleteUser;

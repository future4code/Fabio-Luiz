import { Request, Response } from "express";
import { getTokenData } from "../services/authenticator";
import getUserById from "./../data/getUserByEmail";

const getProfile = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;
    const authorization = getTokenData(token);

    if (!authorization) {
      res.statusCode = 401;
      throw new Error("Unauthorized!");
    }

    const user = await getUserById(authorization.id);

    res.status(201).send({ user: user.id, password: user.password });
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: "Internal server error" });
    } else {
      res.status(res.statusCode).send({ message: error.message });
    }
  }
};

export default getProfile;

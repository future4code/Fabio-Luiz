import { Request, Response } from "express";
import selectUserByName from "../queries/selectUserByName";

export const getUsersByName = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.query;
    const users = await selectUserByName(name as string);

    if (!users.length) {
      res.statusCode = 404;
      throw new Error("No users found");
    }

    res.status(200).send(users);
  } catch (error) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};

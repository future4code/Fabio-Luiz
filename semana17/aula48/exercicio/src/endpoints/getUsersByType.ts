import { Request, Response } from "express";
import selectUserByType from "../queries/selectUserByType";

export const getUsersByType = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.query;
    const { type } = req.params;
    const users = await selectUserByType(type as string);

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

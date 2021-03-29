import { Request, Response } from "express";
import selectAllUsersLimitPage from "../queries/selectAllUsersLimitPage";

export const getAllUsersLimitPage = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const limit:number = 5
    const page = Number(req.query.page) || 1;
    const offset = limit * (page - 1);
    const users = await selectAllUsersLimitPage(limit, offset);

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

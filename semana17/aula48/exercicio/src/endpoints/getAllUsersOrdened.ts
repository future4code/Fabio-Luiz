import { Request, Response } from "express";
import selectAllUsersOrdened from "../queries/selectAllUsersOrdened";

export const getAllUsersOrdened = async (
  req: Request,
  res: Response
): Promise<void> => { 
  try {
    let orderParam = req.query.orderBy as string;
    if (orderParam === 'name' || orderParam !== 'type'){
      orderParam = 'email'
    } 
    
    const users = await selectAllUsersOrdened(orderParam);

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

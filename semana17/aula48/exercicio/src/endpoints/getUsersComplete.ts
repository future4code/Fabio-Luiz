import { Request, Response } from "express";
import selectUsersComplete from "../queries/selectUsersComplete";
import { searchInput } from "../types/searchInput";

export const getUsersComplete = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      name = "",
      type = "",
      orderBy = "name",
      orderType = "DESC",
      page,
    } = req.query as searchInput;
    const limit = page ? "5" : "5000";
    const offset = page ? Number(limit) * (Number(page) - 1) : 0;

    const users = await selectUsersComplete(
      type,
      name,
      orderBy,
      orderType,
      limit,
      offset
    );

    if (
      orderType.toUpperCase() !== "ASC" &&
      orderType.toUpperCase() !== "DESC"
    ) {
      res.statusCode = 422;
      throw new Error(`Invalid order type. The values are: "ASC" or "DESC"`);
    }

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

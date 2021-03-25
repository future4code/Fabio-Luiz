import { Request, Response } from "express";
import connection from "./../connection";

const deleteActorById = async (req: Request, res: Response): Promise<void> => {
  try {
    await connection("Actor")
      .delete()
      .where({ id: req.body.id });
    res.status(201).send("Success!");
  } catch (error) {
    res.status(400).send("Error");
  }
};

export default deleteActorById;

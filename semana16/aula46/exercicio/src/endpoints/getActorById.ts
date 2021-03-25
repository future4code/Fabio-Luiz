import { Request, Response } from "express";
import connection from "./../connection";

const getActorById = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `);

    res.status(200).send(result[0][0]);
  } catch (error) {
    res.status(400).send("Error");
  }
};

export default getActorById;

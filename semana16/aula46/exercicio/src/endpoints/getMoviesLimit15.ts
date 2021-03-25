import { Request, Response } from "express";
import connection from "../connection";

const getMoviesLimit15 = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await connection.raw(`
    SELECT * FROM Filmes LIMIT 15
  `);

    res.status(200).send(result[0]);
  } catch (error) {
    res.status(400).send("Error");
  }
};

export default getMoviesLimit15;

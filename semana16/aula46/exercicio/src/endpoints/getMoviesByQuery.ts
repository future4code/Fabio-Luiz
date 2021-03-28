import { Request, Response } from "express";
import connection from "../connection";

const getMoviesByQuery = async (req: Request, res: Response): Promise<void> => {
  try {
    const query = req.query.query
    const result = await connection.raw(`
    SELECT * FROM Filmes WHERE (title LIKE '%${query}%' OR synopsis LIKE '%${query}%') ORDER BY release_date DESC
  `);

    res.status(200).send(result[0]);
  } catch (error) {
    res.status(400).send("Error");
  }
};

export default getMoviesByQuery;

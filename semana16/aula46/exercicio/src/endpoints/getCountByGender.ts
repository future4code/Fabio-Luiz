import { Request, Response } from "express";
import connection from "../connection";

const getCountByGender = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await connection.raw(`
    SELECT COUNT(*) AS quantity, gender FROM Actor GROUP BY gender
  `);

    res.status(200).send(result[0]);
  } catch (error) {
    res.status(400).send("Error");
  }
};

export default getCountByGender;

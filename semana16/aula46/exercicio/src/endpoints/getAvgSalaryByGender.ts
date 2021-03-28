import { Request, Response } from "express";
import connection from "./../connection";

const getAvgSalaryByGender = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const gender = req.params.gender;
    const result = await connection.raw(
      `SELECT AVG(salary) AS avg_salary, gender FROM Actor WHERE gender='${gender}'`
    );
    res.status(200).send(result[0][0]);
  } catch (error) {
    res.status(400).send("Error");
  }
};

export default getAvgSalaryByGender;

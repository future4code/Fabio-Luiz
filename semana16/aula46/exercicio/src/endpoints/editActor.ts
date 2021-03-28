import { Request, Response } from "express";
import connection from "./../connection";

const editActor = async (req: Request, res: Response):Promise<void> => {
  try {
    const id = req.body.id;
    await connection("Actor")
      .update({
        name: req.body.name,
        salary: req.body.salary,
        birth_date: req.body.birthDate,
        gender: req.body.gender,
      })
      .where({ id: id });
    res.status(201).send("Success!");
  } catch (error) {
    res.status(400).send("Error");
  }
};

export default editActor;

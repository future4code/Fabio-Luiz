import { Request, Response } from "express";
import addRecipe_B from './../business/addRecipe_B';

const addRecipe = async (req: Request, res: Response) => {
  try {
    const {title, description} = req.body
    const token: string = req.headers.authorization!;
    
    await addRecipe_B({ title, description }, token);
    
    res.status(201).send({ status: "Success!", message: "Recipe created!" });
  } catch (error) {
    res.status(res.statusCode).send({ message: error.message });
  }
};

export default addRecipe;

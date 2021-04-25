import { Request, Response } from "express";
import editRecipe_B from './../business/editRecipe_B';
import { editRecipeType } from "../models/recipes";

const editRecipe = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const token: string = req.headers.authorization!;  

    // Campos do body
    const { title, description }: editRecipeType = req.body;

    // Enviando pro BD
    await editRecipe_B({ title, description }, id, token);

    res.status(201).send({ status: "Success!", message: "Recipe edited!" });
  } catch (error) {
    res.status(res.statusCode).send({ message: error.message });
  }
};

export default editRecipe;

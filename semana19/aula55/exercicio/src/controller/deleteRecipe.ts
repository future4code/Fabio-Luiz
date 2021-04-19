import { Request, Response } from "express";
import { getTokenData } from "../services/authenticator";
import { authenticationData } from "../models/auth";
import getRecipeById from "../data/getRecipeById";
import deleteRecipe_B from './../business/deleteRecipe_B';

const deleteRecipe = async (req: Request, res: Response):Promise<void> => {
  try {
    const { id } = req.body;
    const token: string = req.headers.authorization!;
    const tokenData: authenticationData | null = getTokenData(token);

    if (!tokenData) {
      res.statusCode = 401;
      throw new Error("Unauthorized!");
    }

    const recipe = await getRecipeById(id);

    if (tokenData.role !== "admin" && tokenData.id !== recipe.user_id) {
      res.statusCode = 401;
      throw new Error("Unauthorized!");
    }

    // Enviando pro BD
    await deleteRecipe_B(id, token);

    res.status(200).send({ status: "Success!", message: "Recipe removed!" });
  } catch (error) {
    res.status(res.statusCode).send({ message: error.message });
  }
};

export default deleteRecipe;
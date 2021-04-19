import { Request, Response } from "express";
import { getTokenData } from "../services/authenticator";
import { authenticationData } from "../models/auth";
import getRecipeById from './../data/getRecipeById';

const getRecipe = async (req: Request, res: Response) => {
  try {
    const id:string = req.params.id
    const token: string = req.headers.authorization!;
    const tokenData: authenticationData | null = getTokenData(token);

    if (!tokenData) {
      res.statusCode = 401;
      throw new Error("Unauthorized!");
    }

    // Enviando pro BD
    const recipe = await getRecipeById(id);

    res.status(200).send({ status: "Success!", recipe: recipe });
  } catch (error) {
    res.status(res.statusCode).send({ message: error.message });
  }
};

export default getRecipe;

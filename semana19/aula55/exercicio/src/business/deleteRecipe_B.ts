import getRecipeById from "../data/getRecipeById";
import delRecipe from "../data/delRecipe";
import { getTokenData } from "../services/authenticator";
import { authenticationData } from "../models/auth";

const deleteRecipe_B = async (RecipeId: string, token:string): Promise<void> => {
  try {
    const tokenData: authenticationData | null = getTokenData(token);

    if (!tokenData) {
      throw new Error("Unauthorized!");
    }

    const recipe = await getRecipeById(RecipeId);
    if (!recipe) {
      throw new Error("Recipe not found!");
    }

    if (tokenData.role !== "admin" && tokenData.id !== recipe.user_id) {
      throw new Error("Unauthorized!");
    }

    await delRecipe(RecipeId);
  } catch (error) {throw new Error(error.message);}
};

export default deleteRecipe_B;
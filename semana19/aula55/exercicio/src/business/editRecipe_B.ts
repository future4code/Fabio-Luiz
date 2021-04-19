import getRecipeById from "../data/getRecipeById";
import putRecipe from "../data/putRecipe";
import { authenticationData } from "../models/auth";
import { editRecipeType } from "../models/recipes";
import { getTokenData } from "../services/authenticator";

const editRecipe_B = async (input: editRecipeType, recipeId:string, token:string): Promise<void> => {
  try {
    const tokenData: authenticationData | null = getTokenData(token);

    if (!tokenData) {
      throw new Error("Unauthorized!");
    }
    if (
      !tokenData ||
      (tokenData.role !== "admin" && tokenData.id !== recipeId)
    ) {
      throw new Error("Unauthorized!");
    }

    const recipe = await getRecipeById(recipeId);
    if(!recipe){
      throw new Error(`Recipe not found!`);
    }

    // Verifica o tamanho dos inputs
    if (input.title && input.title?.length! < 3) {
      throw new Error(`'title' must be at least 3 characters!`);
    }

    if (input.description && input.description?.length < 250) {
      throw new Error(`'directions' must be at least 250 characters!`);
    }

    // Enviando pro BD
    await putRecipe(recipeId, input.title, input.description);
  } catch (error) {throw new Error(error.message);}
};

export default editRecipe_B;

import { getTokenData } from "../services/authenticator";
import { authenticationData } from "../models/auth";
import { generateId } from "../services/generateId";
import getUserById from "../data/getUserById";
import createRecipe from "../data/createRecipe";
import { addRecipe, addRecipeBody } from "../models/recipes";
import getRecipeByName from './../data/getRecipeByName';

const addRecipe_B = async (input: addRecipe, token: string) => {
  try {
    // Gerando ID aleatório
    const id: string = generateId();

    const tokenData: authenticationData | null = getTokenData(token);
    if (!tokenData) {
      throw new Error("Unauthorized!");
    }

    // Campos do body
    const { title, description }: addRecipe = input;
    const user = await getUserById(tokenData.id);
    const createdAt: number = Math.floor(Date.now() / 1000);

    // Se campos foram preenchidos
    for (let field in addRecipeBody) {
      if (!(field in input)) {
        throw new Error(`'${field}' is mandatory!`);
      }
    }

    // Verifica o tamanho dos inputs
    if (title.length < 3) {
      throw new Error(`'title' must be at least 3 characters!`);
    }

    if (description.length < 250) {
      throw new Error(`'directions' must be at least 250 characters!`);
    }

    const recipe = await getRecipeByName(title)
    if (recipe && recipe.user_id === user?.user_id){
      throw new Error(`You already registered this recipe!`);
    }
      // Enviando pro BD
      await createRecipe({
        recipe_id: id,
        user_id: user?.user_id,
        title,
        description,
        createdAt,
      });
  } catch (error) {throw new Error(error.message);}
};

export default addRecipe_B;

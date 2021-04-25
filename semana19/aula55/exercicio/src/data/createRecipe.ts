import connection from "../connection";
import { Recipe } from "../models/recipes";

const createRecipe = async (recipe: Recipe): Promise<void> => {
  await connection.raw(`
  INSERT INTO cookenu_recipes(recipe_id, user_id, title, description, createdAt)
  VALUES
  ("${recipe.recipe_id}", "${recipe.user_id}", "${recipe.title}", "${recipe.description}", FROM_UNIXTIME(${recipe.createdAt}))
  `);
};

export default createRecipe;

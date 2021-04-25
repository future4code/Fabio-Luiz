import connection from "../connection";
import { Recipe } from "../models/recipes";

const getRecipeByName = async (title: string): Promise<Recipe> => {
  const result = await connection.raw(`
  SELECT cookenu_recipes.recipe_id, cookenu_recipes.user_id, cookenu_users.name as username, cookenu_recipes.title, cookenu_recipes.description, DATE_FORMAT(cookenu_recipes.createdAt, "%d/%m/%Y") as created
  FROM cookenu_recipes 
  JOIN cookenu_users
  ON cookenu_recipes.user_id =  cookenu_users.user_id
  WHERE cookenu_recipes.title = "${title}"
  `);

  return result[0][0];
};

export default getRecipeByName;

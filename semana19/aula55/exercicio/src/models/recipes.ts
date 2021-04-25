export type Recipe = {
  recipe_id: string;
  user_id: string;
  username?: string;
  title: string;
  description: string;
  createdAt: number;
};

export type addRecipe = {
  title: string;
  description: string;
};

export enum addRecipeBody {
  title = "title",
  description = "description",
}

export type editRecipeType = {
  title: string;
  description: string;
};

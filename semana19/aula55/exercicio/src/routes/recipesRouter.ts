import express from 'express';
import addRecipe from '../controller/addRecipe';
import deleteRecipe from '../controller/deleteRecipe';
import editRecipe from '../controller/editRecipe';
import getRecipe from '../controller/getRecipe';

export const recipesRouter = express.Router()

recipesRouter.post("/recipes/create", addRecipe);
recipesRouter.get("/recipes/:id", getRecipe);
recipesRouter.put("/recipes/edit/:id", editRecipe);
recipesRouter.delete("/recipes/delete", deleteRecipe);
import express from "express";
import { PostsController } from './../controller/PostsController';

export const postsRouter = express.Router()
const postsController = new PostsController()

postsRouter.post("/", postsController.createPost)
postsRouter.get("/:id", postsController.getPostById);
import express from "express";
import { PostsController } from './../controller/PostsController';

export const postsRouter = express.Router()
const postsController = new PostsController()

postsRouter.post("/", postsController.createPost)
postsRouter.get("/feed", postsController.getFeed);
postsRouter.get("/filter", postsController.getPostByType);
postsRouter.get("/:id", postsController.getPostById);
import { Request, Response } from "express";
import { PostsBusiness } from "../business/PostsBusiness";
import { createPostInputTDO, getPostByIdDTO, post } from "./../models/posts";

export class PostsController {
  async createPost(req: Request, res: Response): Promise<void> {
    try {
      let message: string = "Success!";
      const token: string = req.headers.authorization as string;
      const { photo, description, type } = req.body;
      const input: createPostInputTDO = { photo, description, type, token };

      const postsBusiness = new PostsBusiness();
      await postsBusiness.createPost(input);

      res.status(201).send({ message });
    } catch (error) {
      res.statusCode = 400;
      let message = error.sqlMessage || error.message;
      res.send({ message });
    }
  }

  async getPostById(req: Request, res: Response): Promise<void> {
    try {
      let message: string = "Success!";
      const token: string = req.headers.authorization as string;
      const { id } = req.params;
      const input: getPostByIdDTO = { id, token };

      const postsBusiness = new PostsBusiness();
      const post: post = await postsBusiness.getPostById(input);

      res.send({ message, post });
    } catch (error) {
      res.statusCode = 400;
      let message = error.sqlMessage || error.message;
      res.send({ message });
    }
  }

  async getFeed(req: Request, res: Response): Promise<any> {
    try {
      let message: string = "Success!";
      const token: string = req.headers.authorization as string;

      const postsBusiness = new PostsBusiness();
      const feed: post[] = await postsBusiness.getFeed(token);

      res.status(201).send({ message, feed });
    } catch (error) {
      res.statusCode = 400;
      let message = error.sqlMessage || error.message;
      res.send({ message });
    }
  }

  async getPostByType(req: Request, res: Response): Promise<void> {
    try {
      let message: string = "Success!";
      const { type } = req.query;

      const postsBusiness = new PostsBusiness();
      const feed: post = await postsBusiness.getPostByType(type!.toString());

      res.send({ message, feed });
    } catch (error) {
      res.statusCode = 400;
      let message = error.sqlMessage || error.message;
      res.send({ message });
    }
  }
}

import { PostsDB } from "../data/PostsDB";
import { CustomError } from "../errors/CustomError";
import { IdGenerator } from "../services/IdGenerator";
import {
  createPostInputTDO,
  getPostByIdDTO,
  post,
  POST_TYPE,
} from "./../models/posts";
import { Auth } from "./../services/Auth";

export class PostsBusiness {
  async createPost(input: createPostInputTDO): Promise<void> {
    try {
      const { photo, description, type = POST_TYPE.NORMAL, token } = input;

      const auth = new Auth();
      const tokenData: any = auth.getTokenData(token);

      if (!tokenData) {
        throw new CustomError(401, "Unauthorized or JWT not found!");
      }

      if (!photo || !description || !type) {
        throw new CustomError(417, "Missing input. Check body request.");
      }

      if (description.length < 3) {
        throw new CustomError(
          422,
          "Description must be at least 3 characters!"
        );
      }

      if (!(type.toUpperCase() in POST_TYPE)) {
        throw new CustomError(422, "Type must be 'event' or 'normal'!");
      }

      const idGenerator = new IdGenerator();
      const id: string = idGenerator.generateId();

      const post: post = {
        id,
        photo,
        description,
        createdAt: new Date(),
        type,
        authorId: tokenData?.id!,
      };

      const postsDB = new PostsDB();
      await postsDB.insertPost(post);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getPostById(input: getPostByIdDTO): Promise<any> {
    try {
      const { id, token } = input;

      const auth = new Auth();
      const tokenData: any = auth.getTokenData(token);

      if (!tokenData) {
        throw new CustomError(401, "Unauthorized or JWT not found!");
      }

      const postsDB = new PostsDB()
      const post = await postsDB.getPostById(id)
      if (!post) {
        throw new CustomError(404, "Post not found!");
      }
      return post

    } catch (error) {
      throw new Error(error.message);
    }
  }
}

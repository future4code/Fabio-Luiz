import BaseDB from "./BaseDB";
import { post } from "../models/posts";

export class PostsDB extends BaseDB {
  protected static tableName: string = "labook_posts";

  async insertPost(post: post): Promise<void> {
    const { id, photo, description, createdAt, type, authorId } = post;
    try {
      await BaseDB.connection(PostsDB.tableName).insert({
        id,
        photo,
        description,
        created_at: createdAt,
        type,
        author_id: authorId,
      });
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async getPostById(id: string): Promise<post> {
    try {
      const result: any = await BaseDB.connection(PostsDB.tableName)
        .select("*")
        .where({ id });
      return result[0];
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}

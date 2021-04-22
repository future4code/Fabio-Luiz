import BaseDB from "./BaseDB";
import { post } from "../models/posts";

export class PostsDB extends BaseDB {
  protected static tableName: string = "labook_posts";
  protected static usersTable: string = "labook_users";
  protected static friendsTablePrefix: string = "labook_friends";

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

  async getFeed(id: string): Promise<post[]> {
    try {
      const feed = await BaseDB.connection(
        `${PostsDB.friendsTablePrefix}_${id}`
      )
        .select(`${PostsDB.tableName}.*`)
        .innerJoin(PostsDB.tableName, function () {
          this.on(
            `${PostsDB.tableName}.author_id`,
            "=",
            `${PostsDB.friendsTablePrefix}_${id}.friend_id`
          );
        })
        .orderBy(`${PostsDB.tableName}.created_at`, "desc");
      return feed;
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async getPostsByType(type: string): Promise<post[]> {
    try {
      const feed = await BaseDB.connection(PostsDB.tableName)
        .select("*")
        .where({ type })
        .orderBy(`${PostsDB.tableName}.created_at`, "desc");
      return feed;
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}

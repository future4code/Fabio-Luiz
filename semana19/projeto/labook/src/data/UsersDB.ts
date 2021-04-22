import BaseDB from "./BaseDB";
import { user } from "../models/users";

export class UsersDB extends BaseDB {
  protected static tableName: string = "labook_posts";

  async insertUser(user: user): Promise<void> {
    const { id, name, email, password, role } = user;
    try {
      await BaseDB.connection(UsersDB.tableName).insert({
        id,
        name,
        email,
        password,
        role,
      });
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async getUserByEmail(email: string): Promise<user> {
    try {
      const result: any = await BaseDB.connection(UsersDB.tableName)
        .select("*")
        .where({ email });
      return result[0];
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async getUserById(id: string): Promise<user> {
    try {
      const result: any = await BaseDB.connection(UsersDB.tableName)
        .select("*")
        .where({ id });
      return result[0];
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}

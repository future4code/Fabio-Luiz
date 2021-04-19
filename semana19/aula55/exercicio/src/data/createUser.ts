import connection from "../connection";
import {user} from "../models/users";

const createUser = async (user: user): Promise<void> => {
  return await connection.raw(`
  INSERT INTO cookenu_users(user_id, name, email, password, role) 
  VALUES
  ("${user.id}","${user.name}","${user.email}","${user.password}","${user.role}")
  `);
};

export default createUser;

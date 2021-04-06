import connection from "../connection";
import { UserType } from "../types";

const getUserById = async (id: string): Promise<UserType> => {
  const result = await connection.raw(`
    SELECT * FROM User WHERE id = "${id}"
    `);
  return result[0][0];
};

export default getUserById;

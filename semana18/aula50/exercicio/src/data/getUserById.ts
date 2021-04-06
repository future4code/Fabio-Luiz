import connection from "../connection";
import { UserType } from "../types";

const getUserById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM User WHERE id = "${id}"
    `);
  return result;
};

export default getUserById;

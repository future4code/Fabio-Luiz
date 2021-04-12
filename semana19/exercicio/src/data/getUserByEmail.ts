import connection from "../connection";
import { UserType } from "../models/user";

const getUserByEmail = async (email: string): Promise<UserType> => {
  const result = await connection.raw(`
    SELECT * FROM User WHERE email = "${email}"
    `);
    return result[0][0]
};

export default getUserByEmail;

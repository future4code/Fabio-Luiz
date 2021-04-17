import connection from "../connection";
import { AuthenticationData } from "../models/auth";
import { UserType } from "../models/user";
import { getTokenData } from "../services/authenticator";

const B_getProfile = async (token:string):Promise<UserType> => {
  try {
    const tokenData: AuthenticationData | null = getTokenData(token);

    if (!tokenData) {
      // res.statusCode = 401;
      throw new Error("Unauthorized!");
    }
    return await connection.select("id", "email").from("User");
  } catch (error) {
    throw new Error(error.message);
  }
};

export default B_getProfile;

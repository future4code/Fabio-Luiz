import { getTokenData } from "../services/authenticator";
import { AuthenticationData, roles } from "../models/auth";
import connection from "../connection";

const B_deleteProfile = async (token: string, id:string):Promise<void> => {
  try {
    const tokenData: AuthenticationData | null = getTokenData(token);

    if (!tokenData || tokenData.role !== roles.ADMIN) {
      // res.statusCode = 401;
      throw new Error("Unauthorized!");
    }

    // await deleteUserById(tokenData.id);
    await connection("User").delete().where({ id });
  } catch (error) {
    throw new Error(error.message);
  }
};

export default B_deleteProfile;

import { getTokenData } from "../services/authenticator";
import { authenticationData } from "../models/auth";
import getUserById from "../data/getUserById";

const userProfile = async (token: string):Promise<any> => {
  try {
    const tokenData: authenticationData | null = getTokenData(token);

    if (!tokenData) {
      throw new Error("Unauthorized!");
    }

    // Enviando pro BD
    const user = await getUserById(tokenData.id);
    return user;
  } catch (error) {throw new Error(error.message);}
};

export default userProfile;

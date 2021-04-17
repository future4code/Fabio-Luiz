import { generateToken } from "../services/authenticator";
import validateEmail from "../services/validateEmail";
import getUserByEmail from "../data/getUserByEmail";
import { comparePass } from "../services/hashManager";
import { convertStrToRole } from "../models/auth";
import { loginInputs } from "../models/user";

const B_login = async (input: loginInputs): Promise<string> => {
  try {
    if (!input.email || !input.password) {
      throw new Error("'email' and 'password' fields are mandatory!");
    }

    if (input.password.length < 6) {
      throw new Error("'password' must be at least 6 characters!");
    }

    if (!validateEmail(input.email)) {
      throw new Error("Invalid E-mail type!");
    }

    const user = await getUserByEmail(input.email);

    if (!user) {
      throw new Error(`This E-mail is not registered!`);
    }

    const passwordIsCorrect = await comparePass(input.password, user?.password);

    if (!passwordIsCorrect) {
      throw new Error(`Invalid password!`);
    }

    const token = generateToken({
      id: user.id,
      role: convertStrToRole(user.role),
    });
    return token;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default B_login;

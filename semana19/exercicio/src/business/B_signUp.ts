import createUser from "../data/createUser";
import { generateId } from "../services/generateId";
import { generateToken } from "../services/authenticator";
import validateEmail from "../services/validateEmail";
import getUserByEmail from "../data/getUserByEmail";
import { hashPass } from "../services/hashManager";
import { signUpInputs } from "../models/user";
import { convertStrToRole } from '../models/auth';

const B_signUp = async (input: signUpInputs):Promise<string> => {
  try {
    const id: string = generateId();

    if (!input.email || !input.password) {
      throw new Error(
        "'email', 'password', 'cep' and 'number' fields are mandatory!"
      );
    }

    if (input.password.length < 6) {
      throw new Error("'password' must be at least 6 characters!");
    }

    if (!validateEmail(input.email)) {
      throw new Error("Invalid E-mail type!");
    }

    const user = await getUserByEmail(input.email);
    if (user) {
      throw new Error(`${input.email} already registered!`);
    }

    const token = generateToken({ id, role: convertStrToRole(input.role!) });

    const cypherPassword = await hashPass(input.password);

    await createUser(id, input.email, cypherPassword, convertStrToRole(input.role!));

    return token
  } catch (error) {
    throw new Error(error.message);
  }
};

export default B_signUp;

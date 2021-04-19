import { comparePass } from "../services/hashManager";
import getUserByEmail from "../data/getUserByEmail";
import { generateToken } from "../services/authenticator";
import { loginInputs, loginBody } from "../models/users";

const login_B = async (input: loginInputs): Promise<string | undefined> => {
  try {
    // VALIDAÇÕES
    // Se campos foram preenchidos
    for (let field in loginBody) {
      if (!(field in input)) {
        throw new Error(`'${field}' is mandatory!`);
      }
    }

    // Se e-mail encontra-se no BD
    const user = await getUserByEmail(input.email);
    if (!user) {
      throw new Error(`E-mail not found!`);
    }

    // Checando senha
    const validPass = await comparePass(input.password, user.password);
    if (!validPass) {
      throw new Error(`Invalid password!`);
    }

    // Gerando token
    const token = generateToken({ id: user.user_id, role: user.role });

    return token;
  } catch (error) {throw new Error(error.message);}
};

export default login_B;

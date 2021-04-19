import { generateId } from "../services/generateId";
import { generateToken } from "../services/authenticator";
import validateEmail from "../services/validateEmail";
import { hashPass } from "../services/hashManager";
import createUser from "../data/createUser";
import getUserByEmail from "../data/getUserByEmail";
import { signUpDTO, signUpBody } from "../models/users";
import { strToRole } from "./../models/users";

const signUp_B = async (input: signUpDTO): Promise<string | undefined> => {
  try {
    // Gerando ID aleatório
    const id: string = generateId();

    // VALIDAÇÕES

    // Se campos foram preenchidos
    for (let field in signUpBody) {
      if (!(field in input)) {
        throw new Error(`'${field}' is mandatory!`);
      }
    }

    // Se senha tem o mínimo de caracteres
    if (input.password?.length < 6) {
      throw new Error("'password' must be at least 6 characters!");
    }

    // Validando input de e-mail
    if (!validateEmail(input.email)) {
      throw new Error("Invalid E-mail type!");
    }

    // Verificando se e-mail já está cadastrado
    const user = await getUserByEmail(input.email);
    if (user) {
      throw new Error("This e-mail has already been registered!");
    }

    // Gerando Token
    const token: string = generateToken({ id, role: strToRole(input.role) });

    // Encriptando senha
    const cypherPassword = await hashPass(input.password);

    // Enviando pro BD
    await createUser({
      id,
      name: input.name,
      email: input.email,
      password: cypherPassword,
      role: strToRole(input.role),
    });

    return token;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default signUp_B;

import {
  signupInputDTO,
  user,
  USER_ROLES,
  validateEmail,
} from "../models/users";
import { CustomError } from "./../errors/CustomError";
import { IdGenerator } from "./../services/IdGenerator";
import { HashManager } from "./../services/HashManager";
import { Auth } from "./../services/Auth";
import { UsersDB } from "./../data/UsersDB";
import { loginInputDTO } from "../models/users";

export class UsersBusiness {
  async signUp(input: signupInputDTO): Promise<string> {
    try {
      const { name, email, password, role = USER_ROLES.NORMAL } = input;

      if (!name || !email || !password) {
        throw new CustomError(417, "Missing input. Check body request.");
      }

      if (!validateEmail(email)) {
        throw new CustomError(422, "Invalid e-mail type!");
      }

      if (name.length < 3) {
        throw new CustomError(422, "Name must be at least 3 characters!");
      }

      if (password.length < 6) {
        throw new CustomError(422, "Password must be at least 6 characters!");
      }

      if (!(role.toUpperCase() in USER_ROLES)) {
        throw new CustomError(422, "Role must be 'normal' or 'admin'!");
      }

      const idGenerator = new IdGenerator();
      const id: string = idGenerator.generateId();

      const hashManager = new HashManager();
      const cypherPass = await hashManager.hash(password);

      const user: user = {
        id: id,
        name: name,
        email: email,
        password: cypherPass,
        role: role,
      };

      const usersDB = new UsersDB();
      await usersDB.insertUser(user);

      const auth = new Auth();
      const token: string = auth.generateToken({ id, role });

      return token;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async login(input: loginInputDTO): Promise<string> {
    try {
      const { email, password } = input;

      if (!email || !password) {
        throw new CustomError(417, "Missing input. Check body request.");
      }

      if (!validateEmail(email)) {
        throw new CustomError(422, "Invalid e-mail type!");
      }

      const usersDB = new UsersDB();
      const user: user = await usersDB.getUserByEmail(email);

      if (!user) {
        throw new CustomError(404, "User not found!");
      }

      const hashManager = new HashManager();
      const isPassOk: boolean = await hashManager.compare(
        password,
        user.password
      );

      if (!isPassOk) {
        throw new CustomError(401, "Invalid credentials!");
      }

      const auth = new Auth();
      const token: string = auth.generateToken({
        id: user.id,
        role: user.role,
      });

      return token;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

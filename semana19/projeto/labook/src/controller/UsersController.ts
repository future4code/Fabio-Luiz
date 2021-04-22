import { Request, Response } from "express";
import { signupInputDTO, loginInputDTO } from "../models/users";
import { UsersBusiness } from "./../business/UsersBusiness";

export class UsersController {
  async signup(req: Request, res: Response): Promise<void> {
    try {
      let message = "Success!";
      const { name, email, password, role } = req.body;
      const input: signupInputDTO = { name, email, password, role };

      const usersBusiness = new UsersBusiness();
      const token = await usersBusiness.signUp(input);

      res.status(201).send({ message, token });
    } catch (error) {
      res.statusCode = 400;
      let message = error.sqlMessage || error.message;
      res.send({ message });
    }
  }

  async login(req: Request, res: Response): Promise<void> {
    try {
      let message = "Success!";
      const { email, password } = req.body;
      const input: loginInputDTO = { email, password };

      const usersBusiness = new UsersBusiness();
      const token = await usersBusiness.login(input);

      res.status(201).send({ message, token });
    } catch (error) {
      res.statusCode = 400;
      let message = error.sqlMessage || error.message;
      res.send({ message });
    }
  }
}

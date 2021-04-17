import { Request, Response } from "express";
import B_getProfile from './../business/B_getProfile';

const getProfile = async (req: Request, res: Response) => {
  try {
    const token: string = req.headers.authorization!;

    const user: any = await B_getProfile(token)

    res.status(201).send({ user });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export default getProfile;

import { Request, Response } from "express";
import { getTokenData } from "../services/authenticator";
import { authenticationData } from "../models/auth";
import getUserById from './../data/getUserById';
import followUser_B from './../business/followUser_B';

const followUser = async (req: Request, res: Response):Promise<void> => {
  try {
    // Body
    const { followingId } = req.body;

    // Token
    const token: string = req.headers.authorization!;
    

   await followUser_B(followingId, token);
   const followingUser = await getUserById(followingId);

    res
      .status(201)
      .send({ status: "Success!", message: `Following ${followingUser.name}!` });
  } catch (error) {
    res.status(res.statusCode).send({ message: error.message });
  }
};

export default followUser;

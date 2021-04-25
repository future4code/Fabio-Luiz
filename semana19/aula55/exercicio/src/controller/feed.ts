import { Request, Response } from "express";
import feed_B from "../business/feed_B";
import { getTokenData } from "../services/authenticator";
import { authenticationData } from "../models/auth";

const feed = async (req: Request, res: Response) => {
  try {
      const token: string = req.headers.authorization!;
      const tokenData: authenticationData | null = getTokenData(token);

      if (!tokenData) {
        res.statusCode = 401;
        throw new Error("Unauthorized!");
      }

      const followingTableName:string = `cookenu_following_${tokenData.id}`;

      // Enviando pro BD
      const recipes = await feed_B(followingTableName);

      res.status(200).send({ status: "Success!", recipes: recipes });
  } catch (error) {
    res.status(res.statusCode).send({ message: error.message });
  }
};

export default feed;

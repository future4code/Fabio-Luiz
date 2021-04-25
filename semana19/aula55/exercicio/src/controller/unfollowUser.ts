import { Request, Response } from "express";
import getUserById from "../data/getUserById";
import unfollowUser_B from "./../business/unfollowUser_B";

const unfollowUser = async (req: Request, res: Response) => {
  try {
    // Body
    const { followingId } = req.body;

    // Token
    const token: string = req.headers.authorization!;

    await unfollowUser_B(followingId, token);
    const followingUser = await getUserById(followingId);

    res
      .status(200)
      .send({ status: "Success!", message: `Unfollow ${followingUser.name}!` });
  } catch (error) {
    res.status(res.statusCode).send({ message: error.message });
  }
};

export default unfollowUser;

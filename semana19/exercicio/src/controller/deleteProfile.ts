import { Request, Response } from "express";
import B_deleteProfile from "./../business/B_deleteProfile";

const deleteProfile = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const token: string = req.headers.authorization!;

    await B_deleteProfile(token, id);

    res.status(201).send({ message: "User deleted!" });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export default deleteProfile;

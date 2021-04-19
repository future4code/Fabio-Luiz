import { Request, Response } from "express";
import resetPassword_B from "../business/resetPassword_B";

export default async function resetPassword(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const email = req.body.email;
    await resetPassword_B(email);

    res.status(200).send({
      message: `An e-mail was sent to ${email} with the new password`,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
}

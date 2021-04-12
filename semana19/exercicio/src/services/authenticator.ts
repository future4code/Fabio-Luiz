import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { AuthenticationData } from "../models/auth";

dotenv.config();

export const generateToken = (payload: AuthenticationData): string => {
  const token = jwt.sign(payload, process.env.JWT_KEY!, { expiresIn: "1y" });
  return token;
};

export const getTokenData = (token: string): AuthenticationData | null => {
  try {
    const { id, role } = jwt.verify(
      token,
      process.env.JWT_KEY!
    ) as AuthenticationData;

    return { id, role };
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

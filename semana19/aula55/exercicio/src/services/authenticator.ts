import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { authenticationData } from "../models/auth";

dotenv.config();

export const generateToken = (payload: authenticationData): string => {
  const token = jwt.sign(payload, process.env.JWT_KEY!, { expiresIn: "1y" });
  return token;
};

export const getTokenData = (token: string): authenticationData | null => {
  try {
    const { id, role } = jwt.verify(
      token,
      process.env.JWT_KEY!
    ) as authenticationData;

    return { id, role };
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

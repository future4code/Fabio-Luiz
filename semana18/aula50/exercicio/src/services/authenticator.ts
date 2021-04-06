import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { AuthenticationData } from "../types";

dotenv.config();

export const generateToken = (payload: AuthenticationData): string => {
  const token = jwt.sign(payload, process.env.JWT_KEY!, { expiresIn: "1y" });
  return token;
};

export const getTokenData = (token: string): AuthenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
  };
  return result;
};

import * as jwt from "jsonwebtoken";
import dotenv from 'dotenv'
import { AuthenticationData } from "../types";

dotenv.config()

const expiresIn = "1min"
export const generateToken = (input: AuthenticationData) => {
  const token = jwt.sign(
      {
          input
      },
      process.env.JWT_KEY as string,
      {
          expiresIn
      }
  );
  return token
};



export const getTokenData = () => {
  
}

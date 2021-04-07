import { Request, Response } from "express";

const endpoint_template = async (
  req: Request,
  res: Response
): Promise<void> => {
  let errorCode: number = 400;
  try {
    await 'query_function()'
    
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};

export default endpoint_template;

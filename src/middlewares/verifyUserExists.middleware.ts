import { Request, Response, NextFunction } from "express";
import { userRepository } from "../repositories";

const verifyUserExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userEmail = req.body.email;

  const user = await userRepository.retrieve({ email: userEmail });

  if (user) {
    return res.status(409).json({ message: "Email already registered" });
  }

  return next();
};

export { verifyUserExists };

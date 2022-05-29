import { Request, Response, NextFunction } from "express";
import { userRepository } from "../repositories";

const getUserOr404 = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { uuid } = req.params;

  const user = await userRepository.retrieve({ id: uuid });

  if (!user) {
    return res.status(404).json({ message: "User not found." });
  }

  req.user = user;

  return next();
};

export { getUserOr404 };

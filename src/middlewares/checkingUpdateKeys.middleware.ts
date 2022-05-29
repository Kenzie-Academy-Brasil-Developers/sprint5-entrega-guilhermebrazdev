import { Request, Response, NextFunction } from "express";

const checkingUpdateKeys = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const sendedKeys = Object.keys(req.body);

  const defaultKeys = ["email", "age", "password", "name"];

  for (let i = 0; i < sendedKeys.length; i++) {
    if (!defaultKeys.includes(sendedKeys[i])) {
      return res.status(400).json({ message: "Wrong keys" });
    }
  }

  return next();
};

export { checkingUpdateKeys };

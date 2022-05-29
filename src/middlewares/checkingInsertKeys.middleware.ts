import { Request, Response, NextFunction } from "express";

const checkinInsertKeys = (req: Request, res: Response, next: NextFunction) => {
  const sendedKeys = Object.keys(req.body);
  const defaultKeys = ["name", "password", "email", "age"];

  let equalKeys = true;

  for (let i = 0; i < sendedKeys.length; i++) {
    if (!defaultKeys.includes(sendedKeys[i])) {
      equalKeys = false;
    }
  }

  if (sendedKeys.length != defaultKeys.length || !equalKeys) {
    return res.status(400).json({ message: "Wrong keys" });
  }

  return next();
};

export { checkinInsertKeys };

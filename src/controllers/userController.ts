import userServices from "../services";
import { Request, Response } from "express";
import { userWOPassword } from "../utils";
import { resolve } from "path";

class UserController {
  insertUserController = async (req: Request, res: Response) => {
    const body = req.body;

    const newUser = await userServices.insertUserService(body);

    return res.status(201).json(newUser);
  };

  getUsers = async (_: Request, res: Response) => {
    const allUsers = await userServices.getAllUsersService();

    return res.status(200).json({ message: allUsers });
  };

  getUserById = async (req: Request, res: Response) => {
    const user = req.user;

    return res.status(200).json({ user: userWOPassword(user) });
  };

  updateUser = (req: Request, res: Response) => {
    const user = req.user;
    const body = req.body;

    const updatedUser = userServices.updateUserService(user, body);

    return res.status(200).json({ user: updatedUser });
  };

  deleteUser = (req: Request, res: Response) => {
    const user = req.user;
    const deletedUser = userServices.deleteUserService(user);

    return res.status(200).json({ user: deletedUser });
  };
}

export default new UserController();

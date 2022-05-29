import { userRepository } from "../repositories";
import { INewUser, IUpdateUser } from "../interfaces";
import { hash } from "bcrypt";
import { userWOPassword } from "../utils";

import { User } from "../entities/User";

class userService {
  insertUserService = async (body: INewUser): Promise<Partial<User>> => {
    const pwd = await hash(body.password, 10);

    const newUser = {
      name: body.name,
      email: body.email,
      age: body.age,
      password: pwd,
      created_at: new Date(),
      updated_at: new Date(),
    };

    const user = await userRepository.save(newUser);

    return userWOPassword(user);
  };

  getAllUsersService = async (): Promise<Partial<User>[]> => {
    const allUsers = (await userRepository.getAll()).map((user) =>
      userWOPassword(user)
    );

    return allUsers;
  };

  updateUserService = (user: User, body: IUpdateUser): Partial<User> => {
    body.updated_at = new Date();

    userRepository.update(user.id, body);

    return userWOPassword({ ...user, ...body });
  };

  deleteUserService = (user: User): Partial<User> => {
    userRepository.delete(user.id);

    return userWOPassword(user);
  };
}

export default new userService();

import { Router } from "express";

import userController from "../controllers";

import {
  checkinInsertKeys,
  verifyUserExists,
  getUserOr404,
  checkingUpdateKeys,
} from "../middlewares";

const router = Router();

router.post(
  "/",
  checkinInsertKeys,
  verifyUserExists,
  userController.insertUserController
);
router.get("/", userController.getUsers);

router.get("/:uuid", getUserOr404, userController.getUserById);

router.patch(
  "/:uuid",
  getUserOr404,
  checkingUpdateKeys,
  userController.updateUser
);

router.delete("/:uuid", getUserOr404, userController.deleteUser);

export default router;

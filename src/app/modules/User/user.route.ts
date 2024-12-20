import { Router } from "express";
import { UserController } from "./user.controller";
import { auth } from "../../middlewares/auth";
import { USER_ROLES } from "./user.constant";
import validateRequest from "../../middlewares/validateRequest";
import { UserValidations } from "./user.validation";

const router = Router();

router.get("/", auth(USER_ROLES.ADMIN), UserController.getUsers);

router.get(
  "/user-data",
  auth(USER_ROLES.USER, USER_ROLES.ADMIN),
  UserController.getCurrentUser
);
router.get(
  "/following-activity",
  auth(USER_ROLES.USER, USER_ROLES.ADMIN),
  UserController.followingActivity
);

router.patch(
  "/:email",
  validateRequest(UserValidations.updateUserInfoSchema),
  auth(USER_ROLES.USER, USER_ROLES.ADMIN),
  UserController.updateUserInfo
);
router.delete("/:userId", auth(USER_ROLES.ADMIN), UserController.deleteUser);

export const UserRoutes = router;

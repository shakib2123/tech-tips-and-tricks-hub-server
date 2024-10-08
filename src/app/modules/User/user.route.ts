import { Router } from "express";
import { UserController } from "./user.controller";
import { auth } from "../../middlewares/auth";
import { USER_ROLES } from "./user.constant";
import validateRequest from "../../middlewares/validateRequest";
import { UserValidations } from "./user.validation";

const router = Router();

router.get("/:email", auth(USER_ROLES.USER), UserController.getCurrentUser);

router.patch(
  "/:email",
  validateRequest(UserValidations.updateUserInfoSchema),
  auth(USER_ROLES.USER),
  UserController.updateUserInfo
);

export const UserRoutes = router;

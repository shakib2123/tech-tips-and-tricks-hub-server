import { Router } from "express";
import { FollowValidations } from "./follow.validation";
import { USER_ROLES } from "../User/user.constant";
import { auth } from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { FollowController } from "./follow.controller";

const router = Router();

router.post(
  "/following",
  validateRequest(FollowValidations.followValidationSchema),
  auth(USER_ROLES.USER, USER_ROLES.ADMIN),
  FollowController.createFollow
);
router.post(
  "/unfollow",
  validateRequest(FollowValidations.followValidationSchema),
  auth(USER_ROLES.USER, USER_ROLES.ADMIN),
  FollowController.createUnfollow
);

export const FollowRoutes = router;

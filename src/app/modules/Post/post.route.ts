import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { auth } from "../../middlewares/auth";
import { USER_ROLES } from "../User/user.constant";
import { PostController } from "./post.controller";
import { PostValidations } from "./post.validation";

const router = Router();

router.post(
  "/",
  validateRequest(PostValidations.createPostValidationSchema),
  auth(USER_ROLES.USER),
  PostController.createPost
);

export const PostRoutes = router;

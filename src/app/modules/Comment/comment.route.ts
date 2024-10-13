import { Router } from "express";
import { CommentController } from "./comment.controller";
import { auth } from "../../middlewares/auth";
import { USER_ROLES } from "../User/user.constant";
import validateRequest from "../../middlewares/validateRequest";
import { CommentValidations } from "./comment.validation";

const router = Router();

router.post(
  "/",
  auth(USER_ROLES.USER),
  validateRequest(CommentValidations.commentValidationSchema),
  CommentController.createComment
);
export const CommentRoutes = router;

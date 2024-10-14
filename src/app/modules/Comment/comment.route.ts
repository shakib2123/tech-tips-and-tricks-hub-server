import { Router } from "express";
import { CommentController } from "./comment.controller";
import { auth } from "../../middlewares/auth";
import { USER_ROLES } from "../User/user.constant";
import validateRequest from "../../middlewares/validateRequest";
import { CommentValidations } from "./comment.validation";

const router = Router();

router.post(
  "/",
  auth(USER_ROLES.USER, USER_ROLES.ADMIN),
  validateRequest(CommentValidations.commentValidationSchema),
  CommentController.createComment
);

router.get(
  "/",
  auth(USER_ROLES.USER, USER_ROLES.ADMIN),
  CommentController.getComments
);

router.put(
  "/:id",
  auth(USER_ROLES.USER, USER_ROLES.ADMIN),
  CommentController.updateComment
);
router.delete(
  "/:id",
  auth(USER_ROLES.USER, USER_ROLES.ADMIN),
  CommentController.deleteComment
);

export const CommentRoutes = router;

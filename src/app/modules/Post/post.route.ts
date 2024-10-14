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
  auth(USER_ROLES.USER, USER_ROLES.ADMIN),
  PostController.createPost
);

router.put(
  "/vote-update",
  auth(USER_ROLES.USER, USER_ROLES.ADMIN),
  PostController.updateVote
);

router.get(
  "/:id",
  auth(USER_ROLES.USER, USER_ROLES.ADMIN),
  PostController.getPost
);

router.get("/", PostController.getAllPosts);

router.get(
  "/my-posts/:email",
  auth(USER_ROLES.USER, USER_ROLES.ADMIN),
  PostController.getMyPosts
);
router.patch(
  "/:postId",
  auth(USER_ROLES.USER, USER_ROLES.ADMIN),
  PostController.updatePost
);
router.delete(
  "/:postId",
  auth(USER_ROLES.USER, USER_ROLES.ADMIN),
  PostController.deletePost
);

export const PostRoutes = router;

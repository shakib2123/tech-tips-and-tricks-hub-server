import { Router } from "express";
import { AuthRoutes } from "../modules/Auth/auth.route";
import { UserRoutes } from "../modules/User/user.route";
import { PostRoutes } from "../modules/Post/post.route";
import { PaymentRoutes } from "../modules/Payment/payment.route";
import { FollowRoutes } from "../modules/Follow/follow.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/posts",
    route: PostRoutes,
  },
  {
    path: "/payments",
    route: PaymentRoutes,
  },
  {
    path: "/follow",
    route: FollowRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_route_1 = require("../modules/Auth/auth.route");
const user_route_1 = require("../modules/User/user.route");
const post_route_1 = require("../modules/Post/post.route");
const payment_route_1 = require("../modules/Payment/payment.route");
const follow_route_1 = require("../modules/Follow/follow.route");
const comment_route_1 = require("../modules/Comment/comment.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/auth",
        route: auth_route_1.AuthRoutes,
    },
    {
        path: "/users",
        route: user_route_1.UserRoutes,
    },
    {
        path: "/posts",
        route: post_route_1.PostRoutes,
    },
    {
        path: "/payments",
        route: payment_route_1.PaymentRoutes,
    },
    {
        path: "/follow",
        route: follow_route_1.FollowRoutes,
    },
    {
        path: "/comments",
        route: comment_route_1.CommentRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;

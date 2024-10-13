"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const auth_1 = require("../../middlewares/auth");
const user_constant_1 = require("../User/user.constant");
const post_controller_1 = require("./post.controller");
const post_validation_1 = require("./post.validation");
const router = (0, express_1.Router)();
router.post("/", (0, validateRequest_1.default)(post_validation_1.PostValidations.createPostValidationSchema), (0, auth_1.auth)(user_constant_1.USER_ROLES.USER), post_controller_1.PostController.createPost);
router.put("/vote-update", (0, auth_1.auth)(user_constant_1.USER_ROLES.USER), post_controller_1.PostController.updateVote);
router.get("/:id", (0, auth_1.auth)(user_constant_1.USER_ROLES.USER), post_controller_1.PostController.getPost);
router.get("/my-posts/:email", (0, auth_1.auth)(user_constant_1.USER_ROLES.USER), post_controller_1.PostController.getMyPosts);
exports.PostRoutes = router;

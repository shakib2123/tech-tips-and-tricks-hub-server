"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentRoutes = void 0;
const express_1 = require("express");
const comment_controller_1 = require("./comment.controller");
const auth_1 = require("../../middlewares/auth");
const user_constant_1 = require("../User/user.constant");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const comment_validation_1 = require("./comment.validation");
const router = (0, express_1.Router)();
router.post("/", (0, auth_1.auth)(user_constant_1.USER_ROLES.USER, user_constant_1.USER_ROLES.ADMIN), (0, validateRequest_1.default)(comment_validation_1.CommentValidations.commentValidationSchema), comment_controller_1.CommentController.createComment);
router.get("/", (0, auth_1.auth)(user_constant_1.USER_ROLES.USER, user_constant_1.USER_ROLES.ADMIN), comment_controller_1.CommentController.getComments);
router.put("/:id", (0, auth_1.auth)(user_constant_1.USER_ROLES.USER, user_constant_1.USER_ROLES.ADMIN), comment_controller_1.CommentController.updateComment);
router.delete("/:id", (0, auth_1.auth)(user_constant_1.USER_ROLES.USER, user_constant_1.USER_ROLES.ADMIN), comment_controller_1.CommentController.deleteComment);
exports.CommentRoutes = router;

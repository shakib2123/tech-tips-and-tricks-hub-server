"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FollowRoutes = void 0;
const express_1 = require("express");
const follow_validation_1 = require("./follow.validation");
const user_constant_1 = require("../User/user.constant");
const auth_1 = require("../../middlewares/auth");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const follow_controller_1 = require("./follow.controller");
const router = (0, express_1.Router)();
router.post("/following", (0, validateRequest_1.default)(follow_validation_1.FollowValidations.followValidationSchema), (0, auth_1.auth)(user_constant_1.USER_ROLES.USER, user_constant_1.USER_ROLES.ADMIN), follow_controller_1.FollowController.createFollow);
router.post("/unfollow", (0, validateRequest_1.default)(follow_validation_1.FollowValidations.followValidationSchema), (0, auth_1.auth)(user_constant_1.USER_ROLES.USER, user_constant_1.USER_ROLES.ADMIN), follow_controller_1.FollowController.createUnfollow);
exports.FollowRoutes = router;

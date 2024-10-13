"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const auth_1 = require("../../middlewares/auth");
const user_constant_1 = require("./user.constant");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const user_validation_1 = require("./user.validation");
const router = (0, express_1.Router)();
router.get("/user-data", (0, auth_1.auth)(user_constant_1.USER_ROLES.USER), user_controller_1.UserController.getCurrentUser);
router.patch("/:email", (0, validateRequest_1.default)(user_validation_1.UserValidations.updateUserInfoSchema), (0, auth_1.auth)(user_constant_1.USER_ROLES.USER), user_controller_1.UserController.updateUserInfo);
exports.UserRoutes = router;

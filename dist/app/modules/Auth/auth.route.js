"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = require("express");
const auth_controller_1 = require("./auth.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const auth_validation_1 = require("./auth.validation");
const router = (0, express_1.Router)();
router.post("/register", (0, validateRequest_1.default)(auth_validation_1.AuthValidations.registerUserValidationSchema), auth_controller_1.AuthController.registerUser);
router.post("/login", (0, validateRequest_1.default)(auth_validation_1.AuthValidations.loginUserValidationSchema), auth_controller_1.AuthController.loginUser);
router.post("/change-password", (0, validateRequest_1.default)(auth_validation_1.AuthValidations.changePasswordValidationSchema), auth_controller_1.AuthController.changePassword);
router.post("/reset-password", (0, validateRequest_1.default)(auth_validation_1.AuthValidations.resetPasswordValidationSchema), auth_controller_1.AuthController.resetPassword);
exports.AuthRoutes = router;

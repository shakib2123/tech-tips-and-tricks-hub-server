import { Router } from "express";
import { AuthController } from "./auth.controller";
import validateRequest from "../../middlewares/validateRequest";
import { AuthValidations } from "./auth.validation";

const router = Router();

router.post(
  "/register",
  validateRequest(AuthValidations.registerUserValidationSchema),
  AuthController.registerUser
);

router.post(
  "/login",
  validateRequest(AuthValidations.loginUserValidationSchema),
  AuthController.loginUser
);

router.post(
  "/change-password",
  validateRequest(AuthValidations.changePasswordValidationSchema),
  AuthController.changePassword
);

router.post(
  "/reset-password",
  validateRequest(AuthValidations.resetPasswordValidationSchema),
  AuthController.resetPassword
);

export const AuthRoutes = router;

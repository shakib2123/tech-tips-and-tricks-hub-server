import { Router } from "express";
import { AuthController } from "./auth.controller";
import validateRequest from "../../middlewares/validateRequest";
import { AuthValidations } from "./auth.validation";

const router = Router();

router.post(
  "/signup",
  validateRequest(AuthValidations.resetPasswordValidationSchema),
  AuthController.register
);

router.post(
  "/signin",
  validateRequest(AuthValidations.loginUserValidationSchema),
  AuthController.login
);

router.post(
  "/forget-password",
  validateRequest(AuthValidations.forgetPasswordValidationSchema),
  AuthController.forgetPassword
);

router.post(
  "/reset-password",
  validateRequest(AuthValidations.resetPasswordValidationSchema),
  AuthController.resetPassword
);

export const AuthRoutes = router;

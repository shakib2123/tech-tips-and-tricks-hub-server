import { Router } from "express";

import validateRequest from "../../middlewares/validateRequest";
import { auth } from "../../middlewares/auth";
import { USER_ROLES } from "../User/user.constant";
import { PaymentValidations } from "./payment.validation";
import { PaymentController } from "./payment.controller";

const router = Router();

router.post(
  "/create-payment-checkout-session",
  auth(USER_ROLES.USER, USER_ROLES.ADMIN),
  validateRequest(PaymentValidations.paymentValidationSchema),
  PaymentController.createPaymentCheckoutSession
);

export const PaymentRoutes = router;

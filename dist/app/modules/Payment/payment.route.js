"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const auth_1 = require("../../middlewares/auth");
const user_constant_1 = require("../User/user.constant");
const payment_validation_1 = require("./payment.validation");
const payment_controller_1 = require("./payment.controller");
const router = (0, express_1.Router)();
router.post("/create-payment-checkout-session", (0, auth_1.auth)(user_constant_1.USER_ROLES.USER), (0, validateRequest_1.default)(payment_validation_1.PaymentValidations.paymentValidationSchema), payment_controller_1.PaymentController.createPaymentCheckoutSession);
exports.PaymentRoutes = router;

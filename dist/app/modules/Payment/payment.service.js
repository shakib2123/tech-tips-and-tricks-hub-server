"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentServices = void 0;
const config_1 = __importDefault(require("../../config"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const user_model_1 = require("../User/user.model");
const stripe_1 = __importDefault(require("stripe"));
const payment_model_1 = require("./payment.model");
const http_status_1 = __importDefault(require("http-status"));
const stripe = new stripe_1.default(config_1.default.stripe_secret_key);
const stripePaymentIntoDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const lineItems = [
        {
            price_data: {
                currency: "usd",
                product_data: {
                    name: data.name,
                },
                unit_amount: Math.round(data.amount * 100),
            },
            quantity: 1,
        },
    ];
    try {
        const session = yield stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: config_1.default.payment_success_url,
            cancel_url: config_1.default.payment_cancel_url,
        });
        if (!session.id) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Payment failed");
        }
        // Update user data
        const userUpdatedData = {
            isVerified: true,
            premiumSubscription: {
                isActive: true,
                subscriptionDate: data.subscriptionDate,
                expirationDate: data.expireSubscriptionDate,
            },
        };
        const user = yield user_model_1.User.findOneAndUpdate({ email: data.email }, userUpdatedData, { new: true });
        if (!user) {
            throw new AppError_1.default(http_status_1.default.NOT_FOUND, "User not found");
        }
        // Create payment record
        const paymentData = Object.assign(Object.assign({}, data), { transactionId: session.id });
        yield payment_model_1.Payment.create(paymentData);
        return { id: session.id };
    }
    catch (error) {
        console.error("Error processing payment:", error);
        throw new AppError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, error.message || "Payment processing failed");
    }
});
exports.PaymentServices = { stripePaymentIntoDB };

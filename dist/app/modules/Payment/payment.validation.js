"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentValidations = void 0;
const zod_1 = require("zod");
const paymentValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({
            required_error: "Email is required",
            invalid_type_error: "Email must be a string",
        }),
        name: zod_1.z.string({
            required_error: "Name is required",
            invalid_type_error: "Name must be a string",
        }),
        amount: zod_1.z.number({
            required_error: "Amount is required",
            invalid_type_error: "Amount must be a number",
        }),
        description: zod_1.z.string({
            required_error: "Description is required",
            invalid_type_error: "Description must be a string",
        }),
        subscriptionDate: zod_1.z.string({
            required_error: "Subscription Date is required",
            invalid_type_error: "Subscription Date must be a string",
        }),
        expireSubscriptionDate: zod_1.z.string({
            required_error: "Expire Subscription Date is required",
            invalid_type_error: "Expire Subscription Date must be a string",
        }),
    }),
});
exports.PaymentValidations = {
    paymentValidationSchema,
};

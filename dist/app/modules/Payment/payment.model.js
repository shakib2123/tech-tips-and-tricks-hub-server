"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
const mongoose_1 = require("mongoose");
const paymentSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    description: { type: String, required: true },
    subscriptionDate: { type: String, required: true },
    expireSubscriptionDate: { type: String, required: true },
    transactionId: { type: String, required: true },
}, {
    timestamps: true,
});
exports.Payment = (0, mongoose_1.model)("Payment", paymentSchema);

import { model, Schema } from "mongoose";
import { TPayment } from "./payment.interface";

const paymentSchema = new Schema<TPayment>(
  {
    email: { type: String, required: true },
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    description: { type: String, required: true },
    subscriptionDate: { type: String, required: true },
    expireSubscriptionDate: { type: String, required: true },
    transactionId: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Payment = model<TPayment>("Payment", paymentSchema);

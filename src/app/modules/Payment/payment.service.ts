import config from "../../config";
import AppError from "../../errors/AppError";
import { User } from "../User/user.model";
import { TPayment } from "./payment.interface";
import Stripe from "stripe";
import { Payment } from "./payment.model";
import httpStatus from "http-status";

const stripe = new Stripe(config.stripe_secret_key!);

const stripePaymentIntoDB = async (data: TPayment) => {
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
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: config.payment_success_url,
      cancel_url: config.payment_cancel_url,
    });

    if (!session.id) {
      throw new AppError(httpStatus.BAD_REQUEST, "Payment failed");
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
    const user = await User.findOneAndUpdate(
      { email: data.email },
      userUpdatedData,
      { new: true }
    );
    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, "User not found");
    }

    // Create payment record
    const paymentData = {
      ...data,
      transactionId: session.id,
    };
    await Payment.create(paymentData);

    return { id: session.id };
  } catch (error: any) {
    throw new AppError(
      httpStatus.INTERNAL_SERVER_ERROR,
      error.message || "Payment processing failed"
    );
  }
};

export const PaymentServices = { stripePaymentIntoDB };

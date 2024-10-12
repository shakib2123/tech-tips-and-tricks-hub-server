import { z } from "zod";
const paymentValidationSchema = z.object({
  body: z.object({
    email: z.string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    }),
    name: z.string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    }),
    amount: z.number({
      required_error: "Amount is required",
      invalid_type_error: "Amount must be a number",
    }),
    description: z.string({
      required_error: "Description is required",
      invalid_type_error: "Description must be a string",
    }),
    subscriptionDate: z.string({
      required_error: "Subscription Date is required",
      invalid_type_error: "Subscription Date must be a string",
    }),
    expireSubscriptionDate: z.string({
      required_error: "Expire Subscription Date is required",
      invalid_type_error: "Expire Subscription Date must be a string",
    }),
  }),
});

export const PaymentValidations = {
  paymentValidationSchema,
};

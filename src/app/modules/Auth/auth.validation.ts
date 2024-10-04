import { z } from "zod";

const registerUserValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    }),
    email: z.string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    }),
    mobileNumber: z.string({
      required_error: "Mobile Number is required",
      invalid_type_error: "Mobile Number must be a string",
    }),
    profilePhoto: z.string({
      required_error: "Profile Photo is required",
      invalid_type_error: "Profile Photo must be a string",
    }),
    password: z.string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a string",
    }),
  }),
});
const loginUserValidationSchema = z.object({
  body: z.object({
    email: z.string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    }),
    password: z.string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a string",
    }),
  }),
});

const forgetPasswordValidationSchema = z.object({
  body: z.object({
    email: z.string({
      required_error: "User email is required",
    }),
  }),
});

const resetPasswordValidationSchema = z.object({
  body: z.object({
    email: z.string({
      required_error: "User email is required",
    }),
    id: z.string({
      required_error: "ID is required",
    }),
    token: z.string({
      required_error: "Token is required",
    }),
    newPassword: z.string({
      required_error: "User password is required",
    }),
  }),
});

export const AuthValidations = {
  registerUserValidationSchema,
  loginUserValidationSchema,
  forgetPasswordValidationSchema,
  resetPasswordValidationSchema,
};

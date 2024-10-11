import { z } from "zod";

const createPostValidationSchema = z.object({
  body: z.object({
    userId: z.string({
      required_error: "User Id is required",
      invalid_type_error: "User Id must be a string",
    }),
    description: z.string({
      required_error: "Description is required",
      invalid_type_error: "Description must be a string",
    }),
    images: z.array(
      z.string({
        required_error: "Images are required",
        invalid_type_error: "Images must be a string",
      })
    ),
    isPremium: z.boolean({
      required_error: "isPremium is required",
      invalid_type_error: "isPremium must be a boolean",
    }),
    category: z.string({
      required_error: "Category is required",
      invalid_type_error: "Category must be a string",
    }),
  }),
});

export const PostValidations = {
  createPostValidationSchema,
};

import { z } from "zod";

const updateUserInfoSchema = z.object({
  body: z.object({
    mobileNumber: z
      .string({
        invalid_type_error: "Mobile Number must be a string",
        required_error: "Mobile Number is required",
      })
      .optional(),
    profilePhoto: z
      .string({
        invalid_type_error: "Profile Photo must be a string",
      })
      .optional(),
    coverPhoto: z
      .string({
        invalid_type_error: "Cover Photo must be a string",
      })
      .optional(),
    location: z
      .string({
        invalid_type_error: "Location must be a string",
      })
      .optional(),
    bio: z
      .string({
        invalid_type_error: "Bio must be a string",
      })
      .optional(),
    website: z
      .string({
        invalid_type_error: "Website must be a string",
      })
      .optional(),
  }),
});

export const UserValidations = {
  updateUserInfoSchema,
};

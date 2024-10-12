import { z } from "zod";

const followValidationSchema = z.object({
  body: z.object({
    followerId: z.string({
      required_error: "Follower Id is required",
      invalid_type_error: "Follower Id must be a string",
    }),
    followingId: z.string({
      required_error: "Following Id is required",
      invalid_type_error: "Following Id must be a string",
    }),
  }),
});

export const FollowValidations = {
  followValidationSchema,
};

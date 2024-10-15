import { z } from "zod";

const commentValidationSchema = z.object({
  body: z.object({
    userId: z.string({
      required_error: "User Id is required",
      invalid_type_error: "User Id must be a string",
    }),
    postId: z.string({
      required_error: "Post Id is required",
      invalid_type_error: "Post Id must be a string",
    }),
    author: z.string({
      required_error: "Author is required",
      invalid_type_error: "Author must be a string",
    }),
    comment: z.string({
      required_error: "Comment is required",
      invalid_type_error: "Comment must be a string",
    }),
  }),
});

export const CommentValidations = {
  commentValidationSchema,
};

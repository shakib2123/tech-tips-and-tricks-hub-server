"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentValidations = void 0;
const zod_1 = require("zod");
const commentValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string({
            required_error: "User Id is required",
            invalid_type_error: "User Id must be a string",
        }),
        postId: zod_1.z.string({
            required_error: "Post Id is required",
            invalid_type_error: "Post Id must be a string",
        }),
        comment: zod_1.z.string({
            required_error: "Comment is required",
            invalid_type_error: "Comment must be a string",
        }),
    }),
});
exports.CommentValidations = {
    commentValidationSchema,
};

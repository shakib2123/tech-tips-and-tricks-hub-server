"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostValidations = void 0;
const zod_1 = require("zod");
const createPostValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string({
            required_error: "User Id is required",
            invalid_type_error: "User Id must be a string",
        }),
        description: zod_1.z.string({
            required_error: "Description is required",
            invalid_type_error: "Description must be a string",
        }),
        images: zod_1.z.array(zod_1.z.string({
            required_error: "Images are required",
            invalid_type_error: "Images must be a string",
        })),
        isPremium: zod_1.z.boolean({
            required_error: "isPremium is required",
            invalid_type_error: "isPremium must be a boolean",
        }),
        category: zod_1.z.string({
            required_error: "Category is required",
            invalid_type_error: "Category must be a string",
        }),
    }),
});
exports.PostValidations = {
    createPostValidationSchema,
};

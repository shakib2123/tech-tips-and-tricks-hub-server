"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidations = void 0;
const zod_1 = require("zod");
const updateUserInfoSchema = zod_1.z.object({
    body: zod_1.z.object({
        mobileNumber: zod_1.z
            .string({
            invalid_type_error: "Mobile Number must be a string",
            required_error: "Mobile Number is required",
        })
            .optional(),
        profilePhoto: zod_1.z
            .string({
            invalid_type_error: "Profile Photo must be a string",
        })
            .optional(),
        coverPhoto: zod_1.z
            .string({
            invalid_type_error: "Cover Photo must be a string",
        })
            .optional(),
        location: zod_1.z
            .string({
            invalid_type_error: "Location must be a string",
        })
            .optional(),
        bio: zod_1.z
            .string({
            invalid_type_error: "Bio must be a string",
        })
            .optional(),
        website: zod_1.z
            .string({
            invalid_type_error: "Website must be a string",
        })
            .optional(),
    }),
});
exports.UserValidations = {
    updateUserInfoSchema,
};

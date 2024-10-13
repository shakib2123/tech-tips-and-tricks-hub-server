"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidations = void 0;
const zod_1 = require("zod");
const registerUserValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: "Name is required",
            invalid_type_error: "Name must be a string",
        }),
        email: zod_1.z.string({
            required_error: "Email is required",
            invalid_type_error: "Email must be a string",
        }),
        mobileNumber: zod_1.z.string({
            required_error: "Mobile Number is required",
            invalid_type_error: "Mobile Number must be a string",
        }),
        profilePhoto: zod_1.z.string({
            required_error: "Profile Photo is required",
            invalid_type_error: "Profile Photo must be a string",
        }),
        password: zod_1.z.string({
            required_error: "Password is required",
            invalid_type_error: "Password must be a string",
        }),
    }),
});
const loginUserValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({
            required_error: "Email is required",
            invalid_type_error: "Email must be a string",
        }),
        password: zod_1.z.string({
            required_error: "Password is required",
            invalid_type_error: "Password must be a string",
        }),
    }),
});
const changePasswordValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({
            required_error: "User email is required",
        }),
    }),
});
const resetPasswordValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        id: zod_1.z.string({
            required_error: "id is required",
        }),
        token: zod_1.z.string({
            required_error: "Token is required",
        }),
        newPassword: zod_1.z.string({
            required_error: "New Password is required",
        }),
    }),
});
exports.AuthValidations = {
    registerUserValidationSchema,
    loginUserValidationSchema,
    changePasswordValidationSchema,
    resetPasswordValidationSchema,
};

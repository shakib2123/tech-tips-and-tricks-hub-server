"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FollowValidations = void 0;
const zod_1 = require("zod");
const followValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        followerId: zod_1.z.string({
            required_error: "Follower Id is required",
            invalid_type_error: "Follower Id must be a string",
        }),
        followingId: zod_1.z.string({
            required_error: "Following Id is required",
            invalid_type_error: "Following Id must be a string",
        }),
    }),
});
exports.FollowValidations = {
    followValidationSchema,
};

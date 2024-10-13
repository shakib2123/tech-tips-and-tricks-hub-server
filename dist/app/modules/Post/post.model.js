"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const mongoose_1 = require("mongoose");
const postSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
    userEmail: { type: String, required: true },
    description: { type: String, required: true },
    images: { type: [String], required: true },
    isPremium: { type: Boolean, required: true },
    category: { type: String, required: true },
    upvote: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "User" }],
    downvote: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "User" }],
    isDeleted: { type: Boolean, default: false },
}, {
    timestamps: true,
});
exports.Post = (0, mongoose_1.model)("Post", postSchema);

import { model, Schema } from "mongoose";
import { TPost } from "./post.interface";

const postSchema = new Schema<TPost>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    userEmail: { type: String, required: true },
    description: { type: String, required: true },
    images: { type: [String], required: true },
    isPremium: { type: Boolean, required: true },
    category: { type: String, required: true },
    upvote: [{ type: Schema.Types.ObjectId, ref: "User" }],
    downvote: [{ type: Schema.Types.ObjectId, ref: "User" }],
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Post = model<TPost>("Post", postSchema);

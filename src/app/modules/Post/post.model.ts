import { model, Schema } from "mongoose";
import { TPost } from "./post.interface";

const postSchema = new Schema<TPost>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    description: { type: String, required: true },
    images: { type: [String], required: true },
    isPremium: { type: Boolean, required: true },
    category: { type: String, required: true },
    upvotes: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Post = model<TPost>("Post", postSchema);

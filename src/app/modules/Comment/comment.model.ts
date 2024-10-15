import { model, Schema } from "mongoose";
import { TComment } from "./controller.interface";

const commentSchema = new Schema<TComment>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    postId: { type: Schema.Types.ObjectId, ref: "Post", required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Comment = model<TComment>("Comment", commentSchema);

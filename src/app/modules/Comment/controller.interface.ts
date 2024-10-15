import { Types } from "mongoose";

export type TComment = {
  postId: Types.ObjectId;
  userId: Types.ObjectId;
  author: Types.ObjectId;
  comment: string;
};

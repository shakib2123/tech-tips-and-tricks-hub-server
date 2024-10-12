import { Types } from "mongoose";

export type TPost = {
  userId: Types.ObjectId;
  userEmail: string;
  description: string;
  images: string[];
  isPremium: boolean;
  category: string;
  upvote: number;
  downvote: number;
  isDeleted: boolean;
};

import { Types } from "mongoose";

export type TPost = {
  userId: Types.ObjectId;
  description: string;
  images: string[];
  isPremium: boolean;
  category: string;
  isDeleted: boolean;
};

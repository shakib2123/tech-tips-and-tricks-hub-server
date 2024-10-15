import { Types } from "mongoose";

export type TUser = {
  name: string;
  email: string;
  role: "USER" | "ADMIN";
  password: string;
  mobileNumber: string;
  profilePhoto: string;
  isVerified: boolean;
  coverPhoto: string;
  location: string;
  bio: string;
  website: string;
  followers: Types.ObjectId;
  following: Types.ObjectId;
  premiumSubscription: {
    isActive: boolean;
    subscriptionDate: Date;
    expirationDate: Date;
  };
  isBlocked: boolean;
  isDeleted: boolean;
};

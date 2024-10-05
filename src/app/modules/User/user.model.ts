import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";

import bcrypt from "bcryptjs";
import config from "../../config";

const userSchema = new Schema<TUser>(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
    password: { type: String, required: true, select: 0 },
    mobileNumber: { type: String, required: true },
    profilePhoto: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    followers: [{ type: Schema.Types.ObjectId, ref: "User", default: [] }],
    following: [{ type: Schema.Types.ObjectId, ref: "User", default: [] }],
    premiumSubscription: {
      isActive: { type: Boolean, default: false },
      subscriptionDate: { type: Date, default: null },
      expirationDate: { type: Date, default: null },
    },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

//pre save middleware / hook
userSchema.pre("save", async function (next) {
  //hashing password and save in database
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_round)
  );

  next();
});

//remove password string after saving data
userSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

export const User = model<TUser>("User", userSchema);
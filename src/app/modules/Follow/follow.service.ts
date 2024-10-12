import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { User } from "../User/user.model";
import { TFollow } from "./follow.interface";
import { startSession } from "mongoose";

const createFollowIntoDB = async (payload: TFollow) => {
  const session = await startSession();
  session.startTransaction();
  try {
    const follower = await User.findOneAndUpdate(
      { _id: payload.followerId },
      { $addToSet: { following: payload.followingId } },
      { new: true, session } // Include session here
    );
    if (!follower) {
      throw new AppError(httpStatus.BAD_REQUEST, "Follower not found");
    }

    const following = await User.findOneAndUpdate(
      { _id: payload.followingId },
      { $addToSet: { followers: payload.followerId } },
      { new: true, session } // Include session here
    );
    if (!following) {
      throw new AppError(httpStatus.BAD_REQUEST, "Following not found");
    }

    await session.commitTransaction();
    session.endSession();
    return follower;
  } catch (error: any) {
    await session.abortTransaction();
    session.endSession();
    console.error("Error during transaction:", error);
    throw new AppError(
      httpStatus.INTERNAL_SERVER_ERROR,
      error.message || "Something went wrong"
    );
  }
};

const createUnfollowIntoDB = async (payload: TFollow) => {
  const session = await startSession();
  session.startTransaction();
  try {
    const follower = await User.findOneAndUpdate(
      { _id: payload.followerId },
      { $pull: { following: payload.followingId } },
      { new: true, session }
    );
    if (!follower) {
      throw new AppError(httpStatus.BAD_REQUEST, "Follower not found");
    }

    const following = await User.findOneAndUpdate(
      { _id: payload.followingId },
      { $pull: { followers: payload.followerId } },
      { new: true, session }
    );
    if (!following) {
      throw new AppError(httpStatus.BAD_REQUEST, "Following not found");
    }

    await session.commitTransaction();
    session.endSession();
    return follower;
  } catch (error: any) {
    await session.abortTransaction();
    session.endSession();
    console.error("Error during transaction:", error);
    throw new AppError(
      httpStatus.INTERNAL_SERVER_ERROR,
      error.message || "Something went wrong"
    );
  }
};

export const FollowServices = { createFollowIntoDB, createUnfollowIntoDB };

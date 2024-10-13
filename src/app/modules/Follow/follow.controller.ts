import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { FollowServices } from "./follow.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const createFollow = catchAsync(async (req: Request, res: Response) => {
  const result = await FollowServices.createFollowIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Following successfully",
    data: result,
  });
});

const createUnfollow = catchAsync(async (req: Request, res: Response) => {
  const result = await FollowServices.createUnfollowIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Unfollowing successfully",
    data: result,
  });
});

export const FollowController = {
  createFollow,
  createUnfollow,
};

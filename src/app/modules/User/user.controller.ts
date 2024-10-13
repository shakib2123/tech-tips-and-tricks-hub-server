import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { UserServices } from "./user.services";
import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse";
import config from "../../config";
import jwt, { JwtPayload } from "jsonwebtoken";
import AppError from "../../errors/AppError";

const getCurrentUser = catchAsync(async (req: Request, res: Response) => {
  const token = req?.headers?.authorization;

  if (!token) {
    throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!");
  }

  const decoded = jwt.verify(
    token,
    config.jwt_access_secret as string
  ) as JwtPayload;

  const { email } = decoded;

  const result = await UserServices.getCurrentUserFromDB(email);

  if (!result) {
    res.status(httpStatus.NOT_FOUND).json({
      success: false,
      statusCode: httpStatus.NOT_FOUND,
      message: "No Data Found",
      data: [],
    });
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User retrieved successfully",
    data: result,
  });
});

const updateUserInfo = catchAsync(async (req: Request, res: Response) => {
  const { email } = req.params;

  const result = await UserServices.updateUserInfoIntoDB(email, req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User updated successfully",
    data: result,
  });
});

export const UserController = {
  getCurrentUser,
  updateUserInfo,
};

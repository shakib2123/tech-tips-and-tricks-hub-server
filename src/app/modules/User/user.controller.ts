import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { UserServices } from "./user.services";
import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse";

const getCurrentUser = catchAsync(async (req: Request, res: Response) => {
  const email = req.params.email;

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

  console.log("req.body", req.body);

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

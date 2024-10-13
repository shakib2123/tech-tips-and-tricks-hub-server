import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";

import httpStatus from "http-status";

import sendResponse from "../../utils/sendResponse";
import { AuthServices } from "./auth.services";

const registerUser = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthServices.registerUser(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "User registered successfully",
    data: result,
  });
});

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthServices.loginUser(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User logged in successfully",
    data: result,
  });
});

const changePassword = catchAsync(async (req, res) => {
  const email = req.body.email;

  const result = await AuthServices.changePassword(email);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Reset link is generated successfully",
    data: result,
  });
});
const resetPassword = catchAsync(async (req, res) => {
  const userData = req.body;

  const result = await AuthServices.resetPassword(userData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Password reset successfully",
    data: result,
  });
});

export const AuthController = {
  registerUser,
  loginUser,
  changePassword,
  resetPassword,
};

import { NextFunction, Request, Response } from "express";

import catchAsync from "../utils/catchAsync";
import AppError from "../errors/AppError";
import httpStatus from "http-status";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import { User } from "../modules/User/user.model";
import { USER_ROLES } from "../modules/User/user.constant";
import { AuthError } from "../errors/authError";

export const auth = (...requiredRoles: (keyof typeof USER_ROLES)[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req?.headers?.authorization;

    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!");
    }

    const decoded = jwt.verify(
      token,
      config.jwt_access_secret as string
    ) as JwtPayload;

    const { email, role } = decoded;

    const user = await User.findOne({ email });

    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, "This user is not found !");
    }

    if (!requiredRoles.includes(role)) {
      return AuthError(req, res);
    }

    next();
  });
};

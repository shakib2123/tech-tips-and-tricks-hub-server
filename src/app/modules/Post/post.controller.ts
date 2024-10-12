import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { PostServices } from "./post.service";

export const createPost = catchAsync(async (req: Request, res: Response) => {
  console.log("req.body", req.body);

  const result = await PostServices.createPostIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Post created successfully",
    data: result,
  });
});

const getMyPosts = catchAsync(async (req: Request, res: Response) => {
  const { email } = req.params;
  const result = await PostServices.getMyPostsFromDB(email);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Posts retrieved successfully",
    data: result,
  });
});

export const PostController = {
  createPost,
  getMyPosts,
};
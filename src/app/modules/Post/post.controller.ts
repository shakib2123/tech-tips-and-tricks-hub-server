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
const getPost = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  console.log("id", id);
  const result = await PostServices.getPostFromDB(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Post retrieved successfully",
    data: result,
  });
});

const updateVote = catchAsync(async (req: Request, res: Response) => {
  const voteData = req.body;
  console.log("voteData", voteData);

  const result = await PostServices.updateVoteIntoDB(voteData);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Voted successfully",
    data: result,
  });
});

export const PostController = {
  createPost,
  getMyPosts,
  getPost,
  updateVote,
};

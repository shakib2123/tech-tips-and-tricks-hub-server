import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { CommentServices } from "./comment.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const createComment = catchAsync(async (req: Request, res: Response) => {
  console.log("req.body", req.body);

  const result = await CommentServices.createCommentIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Comment created successfully",
    data: result,
  });
});

export const CommentController = {
  createComment,
};

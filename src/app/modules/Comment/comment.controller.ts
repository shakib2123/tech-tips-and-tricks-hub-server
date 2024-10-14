import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { CommentServices } from "./comment.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const createComment = catchAsync(async (req: Request, res: Response) => {
  const result = await CommentServices.createCommentIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Comment created successfully",
    data: result,
  });
});
const getComments = catchAsync(async (req: Request, res: Response) => {
  const result = await CommentServices.getCommentsFromDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Comments retrieved successfully",
    data: result,
  });
});

const updateComment = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const { comment } = req.body;

  const result = await CommentServices.updateCommentFromDB({ id, comment });
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Comment updated successfully",
    data: result,
  });
});

const deleteComment = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await CommentServices.deleteCommentFromDB(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Comment deleted successfully",
    data: result,
  });
});

export const CommentController = {
  createComment,
  getComments,
  deleteComment,
  updateComment,
};

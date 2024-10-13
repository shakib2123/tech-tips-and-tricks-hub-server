import { Comment } from "./comment.model";
import { TComment } from "./controller.interface";

const createCommentIntoDB = async (payload: TComment) => {
  const result = await Comment.create(payload);

  return result;
};

export const CommentServices = {
  createCommentIntoDB,
};

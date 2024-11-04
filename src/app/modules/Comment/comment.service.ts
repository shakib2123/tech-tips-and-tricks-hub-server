import { Comment } from "./comment.model";
import { TComment } from "./controller.interface";

const createCommentIntoDB = async (payload: TComment) => {
  const result = await Comment.create(payload);

  return result;
};

const getCommentsFromDB = async (
  postId: string | undefined,
  author: string | undefined
) => {
  let filter: Record<string, string | undefined> = {};
  if (postId) {
    filter.postId = postId;
  }
  if (author && author !== "undefined") {
    filter.author = author;
  }

  const result = await Comment.find(filter).populate("userId");

  return result;
};

const updateCommentFromDB = async ({
  id,
  comment,
}: {
  id: string;
  comment: string;
}) => {
  const result = await Comment.findByIdAndUpdate(
    id,
    { comment },
    { new: true }
  );

  return result;
};

const deleteCommentFromDB = async (id: string) => {
  const result = await Comment.findByIdAndDelete(id);
  return result;
};

export const CommentServices = {
  createCommentIntoDB,
  getCommentsFromDB,
  deleteCommentFromDB,
  updateCommentFromDB,
};

import { Comment } from "./comment.model";
import { TComment } from "./controller.interface";

const createCommentIntoDB = async (payload: TComment) => {
  const result = await Comment.create(payload);

  return result;
};

const getCommentsFromDB = async () => {
  const result = await Comment.find().populate("userId");
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
  console.log(result);
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

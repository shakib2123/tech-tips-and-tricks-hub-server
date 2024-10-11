import { Post } from "./post.model";

const createPostIntoDB = async (payload: Record<string, unknown>) => {
  const result = await Post.create(payload);
  return result;
};

export const PostServices = {
  createPostIntoDB,
};

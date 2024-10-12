import { Post } from "./post.model";

const createPostIntoDB = async (payload: Record<string, unknown>) => {
  const result = await Post.create(payload);
  return result;
};

const getMyPostsFromDB = (email: string) => {
  const result = Post.find({ userEmail: email }).populate("userId");
  return result;
};

export const PostServices = {
  createPostIntoDB,
  getMyPostsFromDB,
};

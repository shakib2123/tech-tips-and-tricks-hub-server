import { Post } from "./post.model";

const createPostIntoDB = async (payload: Record<string, unknown>) => {
  const result = await Post.create(payload);
  return result;
};

const getMyPostsFromDB = async (email: string) => {
  const result = await Post.find({ userEmail: email }).populate("userId");
  return result;
};
const getPostFromDB = async (id: string) => {
  const result = await Post.findById(id).populate("userId");
  return result;
};
const getAllPostsFromDB = async (payload: Record<string, unknown>) => {
  const { sortValue, searchValue, filterValue, page, limit } = payload;
  console.log(payload);
  const filter: any = {};

  if (searchValue) {
    filter.$or = [
      { category: { $regex: searchValue, $options: "i" } },
      { description: { $regex: searchValue, $options: "i" } },
    ];
  } else if (filterValue) {
    filter.category = filterValue;
  }

  let sort: any = {};
  if (sortValue === "-createdAt") {
    sort = { createdAt: -1 };
  } else if (sortValue === "createdAt") {
    sort = { createdAt: 1 };
  }

  let skip = 0;
  let initialPage = Number(page) || 1;
  const limitValue = Number(limit) || 100;

  if (page) {
    skip = (initialPage - 1) * limitValue;
  }

  const result = await Post.find(filter)
    .sort(sort)
    .skip(skip)
    .limit(limitValue)
    .populate("userId");

  if (sortValue === "upvote") {
    result.sort((a, b) => b.upvote.length - a.upvote.length);
  } else if (sortValue === "downvote") {
    result.sort((a, b) => b.downvote.length - a.downvote.length);
  }

  return result;
};

const updateVoteIntoDB = async (payload: Record<string, string>) => {
  if (payload.voteType === "downvote") {
    const post = await Post.findOne({ _id: payload.postId });
    if (post!.downvote.includes(payload?.userId)) {
      // User has already downvoted, so we remove the downvote
      const result = await Post.findOneAndUpdate(
        { _id: payload.postId },
        { $pull: { downvote: payload.userId } },
        { new: true }
      );
      return result;
    } else {
      // User has not downvoted yet, so we add the downvote
      const result = await Post.findOneAndUpdate(
        { _id: payload.postId },
        { $addToSet: { downvote: payload.userId } },
        { new: true }
      );
      return result;
    }
  } else if (payload.voteType === "upvote") {
    const post = await Post.findOne({ _id: payload.postId });
    if (post!.upvote.includes(payload.userId)) {
      // User has already upvoted, so we remove the upvote
      const result = await Post.findOneAndUpdate(
        { _id: payload.postId },
        { $pull: { upvote: payload.userId } },
        { new: true }
      );
      return result;
    } else {
      // User has not upvoted yet, so we add the upvote
      const result = await Post.findOneAndUpdate(
        { _id: payload.postId },
        { $addToSet: { upvote: payload.userId } },
        { new: true }
      );
      return result;
    }
  }
};

const updatePostIntoDB = async ({
  postId,
  updatedData,
}: {
  postId: string;
  updatedData: Record<string, unknown>;
}) => {
  const result = await Post.findOneAndUpdate({ _id: postId }, updatedData, {
    new: true,
  });
  return result;
};

export const PostServices = {
  createPostIntoDB,
  getMyPostsFromDB,
  getPostFromDB,
  updateVoteIntoDB,
  getAllPostsFromDB,
  updatePostIntoDB,
};

import { User } from "./user.model";

const getCurrentUserFromDB = async (email: string) => {
  const result = await User.findOne({ email });
  return result;
};

const updateUserInfoIntoDB = async (
  email: string,
  payload: Record<string, unknown>
) => {
  const result = await User.findOneAndUpdate({ email }, payload);
  return result;
};

const followingActivity = async (email: string, tab: string) => {
  let usersId;

  const user = await User.findOne({ email });

  if (tab === "following") {
    usersId = user?.following;
  } else if (tab === "followers") {
    usersId = user?.followers;
  }

  const users = await User.find({ _id: { $in: usersId } });

  return users;
};

export const UserServices = {
  getCurrentUserFromDB,
  updateUserInfoIntoDB,
  followingActivity,
};

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

export const UserServices = {
  getCurrentUserFromDB,
  updateUserInfoIntoDB,
};

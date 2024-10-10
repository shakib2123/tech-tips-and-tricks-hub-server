export type TUser = {
  name: string;
  email: string;
  role: "USER" | "ADMIN";
  password: string;
  mobileNumber: string;
  profilePhoto: string;
  isVerified: boolean;
  coverPhoto: string;
  location: string;
  bio: string;
  website: string;
  followers: string[];
  following: string[];
  premiumSubscription: {
    isActive: boolean;
    subscriptionDate: Date;
    expirationDate: Date;
  };
  isDeleted: boolean;
};

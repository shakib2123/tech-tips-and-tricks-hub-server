export type TUser = {
  name: string;
  email: string;
  role: "USER" | "ADMIN";
  password: string;
  mobileNumber: string;
  profilePhoto: string;
  isVerified: boolean;
  followers: string[];
  following: string[];
  premiumSubscription: {
    isActive: boolean;
    subscriptionDate: Date;
    expirationDate: Date;
  };
  isDeleted: boolean;
};

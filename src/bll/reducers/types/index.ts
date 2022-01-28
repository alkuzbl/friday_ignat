// userProfile style
import { UserType } from 'dal/auth-api';

export type UserProfileType = {
  _id: string;
  email: string;
  isAdmin: boolean;
  name: string;
  verified: boolean;
  publicCardPacksCount: number;
  created: string;
  updated: string;
  avatar: string;
};
export type UserProfileDataType = {
  user: UserProfileType;
  token: string | undefined;
  tokenDeathTime: number | undefined;
};
export type UserProfileInitialStateType = {
  data: UserProfileDataType;
};
// auth-slice style
export type InitialStateAuthType = {
  user: UserType;
  isAuth: boolean;
};

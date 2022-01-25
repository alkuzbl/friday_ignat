// userProfile types
import { StatusType } from 'app/app-slice';
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
  token: string;
  tokenDeathTime: number;
};
export type UserProfileDataType = {
  user: UserProfileType;
};
export type UserProfileInitialStateType = {
  data: UserProfileDataType;
  error: null | string | unknown;
};
// auth-slice types
export type InitialStateAuthType = {
  user: UserType;
  isAuth: boolean;
  error: string | null | unknown;
  status: StatusType;
};

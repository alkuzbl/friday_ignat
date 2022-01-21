import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';

import { userAPI } from '../dal/user-api';

const userProfileInitialState: UserProfileInitialStateType = {
  data: {
    user: {} as UserProfileType,
  },
};

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState: userProfileInitialState,
  reducers: {
    setUserProfile: (state, action: PayloadAction<UserProfileDataType>) => {
      state.data = action.payload;
    },
  },
});

export const userProfileReducer = userProfileSlice.reducer;
export const { setUserProfile } = userProfileSlice.actions;

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

export const getUserProfile = (data: { id: string }) => async (dispatch: Dispatch) => {
  try {
    const res = await userAPI.getUser(data);
    dispatch(setUserProfile(res.data));
  } catch (e: any) {
    const error = e.response
      ? e.response.data.error
      : `${e.message}, more details in the console`;
    console.log(error);
  }
};

export type UserProfileDataType = {
  user: UserProfileType;
};
type UserProfileInitialStateType = {
  data: UserProfileDataType;
};

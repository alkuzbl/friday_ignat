import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { logout } from 'bll/middlewares';
import {
  UserProfileDataType,
  UserProfileInitialStateType,
  UserProfileType,
} from 'bll/reducers/types';

const userProfileInitialState: UserProfileInitialStateType = {
  data: {
    user: {} as UserProfileType,
    token: undefined,
    tokenDeathTime: undefined,
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
  extraReducers: builder => {
    builder.addCase(logout.fulfilled, state => {
      state.data = {} as UserProfileDataType;
      state.data.user = {} as UserProfileType;
    });
  },
});

export const userProfileReducer = userProfileSlice.reducer;
export const { setUserProfile } = userProfileSlice.actions;

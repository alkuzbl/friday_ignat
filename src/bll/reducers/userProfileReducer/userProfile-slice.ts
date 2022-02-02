import { createSlice } from '@reduxjs/toolkit';

import { getUserProfile, logout } from 'bll/middlewares';
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
  reducers: {},
  extraReducers: builder => {
    builder.addCase(logout.fulfilled, state => {
      state.data = {} as UserProfileDataType;
      state.data.user = {} as UserProfileType;
    });
    builder.addCase(getUserProfile.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const userProfileReducer = userProfileSlice.reducer;

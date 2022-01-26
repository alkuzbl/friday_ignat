import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getUserProfile } from 'bll/middlewares';
import {
  UserProfileDataType,
  UserProfileInitialStateType,
  UserProfileType,
} from 'bll/reducers/types';

const userProfileInitialState: UserProfileInitialStateType = {
  data: {
    user: {} as UserProfileType,
  },
  error: null,
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
    builder.addCase(getUserProfile.fulfilled, (state, { payload }) => {
      state.data.user = payload.user;
    });
    builder.addCase(getUserProfile.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const userProfileReducer = userProfileSlice.reducer;
export const { setUserProfile } = userProfileSlice.actions;

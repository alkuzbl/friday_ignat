import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  UserProfileDataType,
  UserProfileInitialStateType,
  UserProfileType,
} from 'bll/reducers/types';

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

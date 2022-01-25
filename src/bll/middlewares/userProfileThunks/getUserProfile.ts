import { createAsyncThunk } from '@reduxjs/toolkit';

import { userAPI } from 'dal/user-api';

export const getUserProfile = createAsyncThunk(
  'userProfile/getUserProfile',
  async (data: { id: string }, { rejectWithValue }) => {
    try {
      const res = await userAPI.getUser(data);
      return res.data;
    } catch (e: any) {
      const error: string = e.response
        ? e.response.data.error
        : `${e.message}, more details in the console`;
      return rejectWithValue(error);
    }
  },
);

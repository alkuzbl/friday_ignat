import { createAsyncThunk } from '@reduxjs/toolkit';

import { getResponseError } from 'bll/middlewares/utils';
import { authAPI } from 'dal/auth-api';

export const getAuthUser = createAsyncThunk(
  'auth/getAuthUser',
  async (data, { rejectWithValue }) => {
    try {
      const res = await authAPI.getAuthMe({});
      return res.data;
    } catch (e: any) {
      return rejectWithValue(getResponseError(e));
    }
  },
);

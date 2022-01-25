import { createAsyncThunk } from '@reduxjs/toolkit';

import { getResponseError } from 'bll/middlewares/utils';
import { authAPI } from 'dal/auth-api';

export const logout = createAsyncThunk(
  'login/logout',
  async (data: any, { rejectWithValue }) => {
    try {
      await authAPI.setLogOut(data);
      return true;
    } catch (e: any) {
      return rejectWithValue(getResponseError(e));
    }
  },
);

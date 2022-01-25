import { createAsyncThunk } from '@reduxjs/toolkit';

import { getResponseError } from 'bll/middlewares/utils';
import { setAuthStatus } from 'bll/reducers/auth-slice';
import { authAPI, ForgotDataType } from 'dal/auth-api';

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (data: ForgotDataType, { rejectWithValue, dispatch }) => {
    dispatch(setAuthStatus('loading'));
    try {
      await authAPI.getForgotPassword(data);
      return true;
    } catch (e: any) {
      return rejectWithValue(getResponseError(e));
    }
  },
);

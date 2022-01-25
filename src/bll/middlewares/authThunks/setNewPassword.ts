import { createAsyncThunk } from '@reduxjs/toolkit';

import { getResponseError } from 'bll/middlewares/utils';
import { setAuthStatus } from 'bll/reducers/auth-slice';
import { authAPI, NewPasswordDataType } from 'dal/auth-api';

export const setNewPassword = createAsyncThunk(
  'auth/setNewPassword',
  async (data: NewPasswordDataType, { rejectWithValue, dispatch }) => {
    dispatch(setAuthStatus('loading'));
    try {
      await authAPI.setNewPassword(data);
      return true;
    } catch (e: any) {
      return rejectWithValue(getResponseError(e));
    }
  },
);

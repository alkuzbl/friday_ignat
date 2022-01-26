import { createAsyncThunk } from '@reduxjs/toolkit';

import { getResponseError } from 'bll/middlewares/utils';
import { setAuthStatus } from 'bll/reducers/authReducer/auth-slice';
import { authAPI, LoginDataType } from 'dal/auth-api';

export const login = createAsyncThunk(
  'auth/login',
  async (data: LoginDataType, { dispatch, rejectWithValue }) => {
    dispatch(setAuthStatus('loading'));
    try {
      const res = await authAPI.setAuth(data);
      return res.data;
    } catch (e: any) {
      return rejectWithValue(getResponseError(e));
    }
  },
);

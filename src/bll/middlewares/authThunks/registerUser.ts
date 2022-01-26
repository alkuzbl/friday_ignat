import { createAsyncThunk } from '@reduxjs/toolkit';

import { getResponseError } from 'bll/middlewares/utils';
import { setAuthStatus } from 'bll/reducers/authReducer/auth-slice';
import { authAPI, RegisterUserDataType } from 'dal/auth-api';

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (data: RegisterUserDataType, { rejectWithValue, dispatch }) => {
    dispatch(setAuthStatus('loading'));
    try {
      await authAPI.setRegistration(data);
      return true;
    } catch (e: any) {
      return rejectWithValue(getResponseError(e));
    }
  },
);

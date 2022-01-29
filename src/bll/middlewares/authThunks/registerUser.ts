import { createAsyncThunk } from '@reduxjs/toolkit';

import { setStatusApp } from 'app/app-slice';
import { setResponseError } from 'bll/middlewares/utils/setResponseError';
import { authAPI, RegisterUserDataType } from 'dal/auth-api';

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (data: RegisterUserDataType, { dispatch }) => {
    dispatch(setStatusApp('loading'));
    try {
      await authAPI.setRegistration(data);
      dispatch(setStatusApp('succeed'));
    } catch (e: any) {
      setResponseError(e, dispatch);
    }
  },
);

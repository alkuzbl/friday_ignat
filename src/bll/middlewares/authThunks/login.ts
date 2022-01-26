import { createAsyncThunk } from '@reduxjs/toolkit';

import { setStatusApp } from 'app/app-slice';
import { setResponseError } from 'bll/middlewares/utils/getResponseError';
import { setLogin } from 'bll/reducers/authReducer/auth-slice';
import { authAPI, LoginDataType } from 'dal/auth-api';

export const login = createAsyncThunk(
  'auth/login',
  async (data: LoginDataType, { dispatch }) => {
    dispatch(setStatusApp('loading'));
    try {
      const res = await authAPI.setAuth(data);
      dispatch(setLogin(res.data));
      dispatch(setStatusApp('succeed'));
    } catch (e: any) {
      setResponseError(e, dispatch);
    }
    dispatch(setStatusApp('idle'));
  },
);

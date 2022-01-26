import { createAsyncThunk } from '@reduxjs/toolkit';

import { setStatusApp } from 'app/app-slice';
import { setResponseError } from 'bll/middlewares/utils/getResponseError';
import { authAPI, NewPasswordDataType } from 'dal/auth-api';

export const setNewPassword = createAsyncThunk(
  'auth/setNewPassword',
  async (data: NewPasswordDataType, { dispatch }) => {
    dispatch(setStatusApp('loading'));
    try {
      await authAPI.setNewPassword(data);
      dispatch(setStatusApp('succeed'));
    } catch (e: any) {
      setResponseError(e, dispatch);
    }
    dispatch(setStatusApp('idle'));
  },
);

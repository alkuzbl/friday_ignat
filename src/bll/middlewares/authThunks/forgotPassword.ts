import { createAsyncThunk } from '@reduxjs/toolkit';

import { setActiveModalWindow, setStatusApp } from 'app/app-slice';
import { setResponseError } from 'bll/middlewares/utils/setResponseError';
import { authAPI, ForgotDataType } from 'dal/auth-api';

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (data: ForgotDataType, { dispatch }) => {
    dispatch(setStatusApp('loading'));
    try {
      await authAPI.getForgotPassword(data);
      dispatch(
        setActiveModalWindow({
          name: 'password-recovery-message',
          modalWindowData: { email: data.email },
        }),
      );
      dispatch(setStatusApp('succeed'));
    } catch (e: any) {
      setResponseError(e, dispatch);
    }
    dispatch(setStatusApp('idle'));
  },
);

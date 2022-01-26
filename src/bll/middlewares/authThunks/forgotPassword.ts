import { createAsyncThunk } from '@reduxjs/toolkit';

import { setActiveModalWindow } from 'app/app-slice';
import { getResponseError } from 'bll/middlewares/utils';
import { setAuthStatus } from 'bll/reducers/authReducer/auth-slice';
import { authAPI, ForgotDataType } from 'dal/auth-api';

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (data: ForgotDataType, { rejectWithValue, dispatch }) => {
    dispatch(setAuthStatus('loading'));
    try {
      await authAPI.getForgotPassword(data);
      dispatch(
        setActiveModalWindow({
          name: 'password-recovery-message',
          modalWindowData: { email: data.email },
        }),
      );
      return true;
    } catch (e: any) {
      return rejectWithValue(getResponseError(e));
    }
  },
);

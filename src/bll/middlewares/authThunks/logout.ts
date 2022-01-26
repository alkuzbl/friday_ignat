import { createAsyncThunk } from '@reduxjs/toolkit';

import { setResponseError } from 'bll/middlewares/utils/getResponseError';
import { setLogout } from 'bll/reducers/authReducer/auth-slice';
import { authAPI } from 'dal/auth-api';

export const logout = createAsyncThunk(
  'login/logout',
  async (data: any, { dispatch }) => {
    try {
      await authAPI.setLogOut(data);
      dispatch(setLogout());
    } catch (e: any) {
      setResponseError(e, dispatch);
    }
  },
);

import { createAsyncThunk } from '@reduxjs/toolkit';

import { setResponseError } from 'bll/middlewares/utils/getResponseError';
import { authAPI } from 'dal/auth-api';

export const getAuthUser = createAsyncThunk(
  'auth/getAuthUser',
  async (data, { dispatch }) => {
    try {
      await authAPI.getAuthMe({});
    } catch (e: any) {
      if (e.response.status !== 401) {
        setResponseError(e, dispatch);
      }
    }
  },
);

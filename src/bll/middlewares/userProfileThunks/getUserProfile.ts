import { createAsyncThunk } from '@reduxjs/toolkit';

import { setStatusApp } from 'app/app-slice';
import { setResponseError } from 'bll/middlewares/utils/setResponseError';
import { userAPI } from 'dal/user-api';

export const getUserProfile = createAsyncThunk(
  'userProfile/getUserProfile',
  async (data: { id: string }, { dispatch, rejectWithValue }) => {
    dispatch(setStatusApp('loading'));
    try {
      const res = await userAPI.getUser(data);
      return res.data;
    } catch (e: any) {
      setResponseError(e, dispatch);
      return rejectWithValue(undefined);
    }
  },
);

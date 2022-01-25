import { createAsyncThunk } from '@reduxjs/toolkit';

import { getResponseError } from 'bll/middlewares/utils';
import { setAuthStatus } from 'bll/reducers/auth-slice';
import { authAPI, UpdateUserDataType } from 'dal/auth-api';

export const updatedUserData = createAsyncThunk(
  'auth/updateUserData',
  async (data: UpdateUserDataType, { dispatch, rejectWithValue }) => {
    dispatch(setAuthStatus('loading'));
    try {
      const res = await authAPI.setUpdatedUserData(data);
      return res.data.updatedUser;
    } catch (e: any) {
      return rejectWithValue(getResponseError(e));
    }
  },
);

import { createAsyncThunk } from '@reduxjs/toolkit';

import { setStatusApp } from 'app/app-slice';
import { setResponseError } from 'bll/middlewares/utils/setResponseError';
import { setUserData } from 'bll/reducers/authReducer/auth-slice';
import { authAPI, UpdateUserDataType } from 'dal/auth-api';

export const updatedUserData = createAsyncThunk(
  'auth/updateUserData',
  async (data: UpdateUserDataType, { dispatch }) => {
    dispatch(setStatusApp('loading'));
    try {
      const res = await authAPI.setUpdatedUserData(data);
      dispatch(setUserData(res.data.updatedUser));
      dispatch(setStatusApp('succeed'));
    } catch (e: any) {
      setResponseError(e, dispatch);
    }
  },
);

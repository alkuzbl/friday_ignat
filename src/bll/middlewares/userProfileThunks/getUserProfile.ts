import { createAsyncThunk } from '@reduxjs/toolkit';

import { setStatusApp } from 'app/app-slice';
import { setResponseError } from 'bll/middlewares/utils/setResponseError';
import { setUserProfile } from 'bll/reducers/userProfileReducer/userProfile-slice';
import { userAPI } from 'dal/user-api';

export const getUserProfile = createAsyncThunk(
  'userProfile/getUserProfile',
  async (data: { id: string }, { dispatch }) => {
    dispatch(setStatusApp('loading'));
    try {
      const res = await userAPI.getUser(data);
      dispatch(setUserProfile(res.data));
      dispatch(setStatusApp('succeed'));
    } catch (e: any) {
      setResponseError(e, dispatch);
    }
    dispatch(setStatusApp('idle'));
  },
);

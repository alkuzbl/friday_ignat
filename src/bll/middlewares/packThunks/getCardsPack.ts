import { createAsyncThunk, ThunkDispatch } from '@reduxjs/toolkit';

import { setStatusApp } from 'app/app-slice';
import { getUserProfile } from 'bll/middlewares/userProfileThunks';
import { setResponseError } from 'bll/middlewares/utils/setResponseError';
import { DataPackType } from 'bll/reducers/packReducer/types';
import { AppAction, AppStoreType } from 'bll/store';
import { packAPI, RequestGetPayloadPacksType } from 'dal/pack-api';

export const getCardsPack = createAsyncThunk<
  DataPackType,
  RequestGetPayloadPacksType,
  {
    dispatch: ThunkDispatch<AppStoreType, void, AppAction>;
    state: AppStoreType;
  }
>('pack/getCardsPack', async (data, { dispatch, rejectWithValue, getState }) => {
  const profileUserId = getState().userProfile.data.user._id;
  dispatch(setStatusApp('loading'));
  try {
    const res = await packAPI.getCardsPack(data);
    if (data.user_id && data.user_id !== profileUserId) {
      dispatch(getUserProfile({ id: data.user_id }));
    }
    return res.data;
  } catch (e: any) {
    setResponseError(e, dispatch);
    return rejectWithValue(undefined);
  }
});

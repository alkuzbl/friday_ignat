import { createAsyncThunk, ThunkDispatch } from '@reduxjs/toolkit';

import { setStatusApp } from 'app/app-slice';
import { getUserProfile } from 'bll/middlewares/userProfileThunks';
import { setResponseError } from 'bll/middlewares/utils/setResponseError';
import { setPacks } from 'bll/reducers/packReducer/pack-slice';
import { AppAction, AppStoreType } from 'bll/store';
import { packAPI, RequestGetPayloadPacksType } from 'dal/pack-api';

export const getCardsPack = createAsyncThunk<
  {},
  RequestGetPayloadPacksType,
  {
    dispatch: ThunkDispatch<AppStoreType, void, AppAction>;
    state: AppStoreType;
  }
>('pack/getCardsPack', async (data, { dispatch, getState }) => {
  const profileUserId = getState().userProfile.data.user._id;

  dispatch(setStatusApp('loading'));
  try {
    const res = await packAPI.getCardsPack(data);
    dispatch(setPacks(res.data));
    dispatch(setStatusApp('succeed'));
    if (data.user_id && data.user_id !== profileUserId) {
      dispatch(getUserProfile({ id: data.user_id }));
    }
  } catch (e: any) {
    setResponseError(e, dispatch);
  }
  dispatch(setStatusApp('idle'));
});

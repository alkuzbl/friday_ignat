import { createAsyncThunk, ThunkDispatch } from '@reduxjs/toolkit';

import { getCardsPack } from 'bll/middlewares/packThunks/getCardsPack';
import { getResponseError } from 'bll/middlewares/utils';
import { setStatusCardsPack } from 'bll/reducers/pack-slice';
import { AppAction, AppStoreType } from 'bll/store';
import { packAPI } from 'dal/pack-api';
// dispatch: AsyncThunkAction<any, any, any>;
export const deleteCardsPack = createAsyncThunk<
  {},
  undefined,
  {
    dispatch: ThunkDispatch<AppStoreType, void, AppAction>;
    state: AppStoreType;
  }
>('pack/deleteCardsPack', async (_, { dispatch, getState, rejectWithValue }) => {
  dispatch(setStatusCardsPack('loading'));
  const secondState = getState();
  const { _id: id } = secondState.app.modalWindow.modalWindowData;
  const { page, pageCount } = secondState.packs.data;
  const userId = secondState.auth.user._id;
  try {
    await packAPI.deletePack({ id });
    dispatch(getCardsPack({ user_id: userId, page, pageCount }));
    return true;
  } catch (e: any) {
    return rejectWithValue(getResponseError(e));
  }
});

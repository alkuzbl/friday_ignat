import { createAsyncThunk, ThunkDispatch } from '@reduxjs/toolkit';

import { setInactiveModalWindow, setStatusApp } from 'app/app-slice';
import { getCardsPack } from 'bll/middlewares/packThunks/getCardsPack';
import { setResponseError } from 'bll/middlewares/utils/setResponseError';
import { AppAction, AppStoreType } from 'bll/store';
import { packAPI } from 'dal/pack-api';

export const deleteCardsPack = createAsyncThunk<
  {},
  undefined,
  {
    dispatch: ThunkDispatch<AppStoreType, void, AppAction>;
    state: AppStoreType;
  }
>('pack/deleteCardsPack', async (_, { dispatch, getState }) => {
  const secondState = getState();
  const { _id: id } = secondState.app.modalWindow.modalWindowData;
  const { page, pageCount } = secondState.packs.data;
  const userId = secondState.auth.user._id;
  dispatch(setStatusApp('loading'));
  try {
    await packAPI.deletePack({ id });
    dispatch(getCardsPack({ user_id: userId, page, pageCount }));
  } catch (e: any) {
    setResponseError(e, dispatch);
  }
  dispatch(setInactiveModalWindow());
});

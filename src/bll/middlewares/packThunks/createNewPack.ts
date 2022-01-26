import { createAsyncThunk, ThunkDispatch } from '@reduxjs/toolkit';

import { setInactiveModalWindow, setStatusApp } from 'app/app-slice';
import { getCardsPack } from 'bll/middlewares/packThunks/getCardsPack';
import { setResponseError } from 'bll/middlewares/utils/getResponseError';
import { AppAction, AppStoreType } from 'bll/store';
import { packAPI } from 'dal/pack-api';

export const createNewPack = createAsyncThunk<
  {},
  { name: string },
  {
    dispatch: ThunkDispatch<AppStoreType, void, AppAction>;
    state: AppStoreType;
  }
>(
  'pack/createNewPack',

  async (data, { dispatch, getState }) => {
    const secondState = getState();
    const userId = secondState.auth.user._id;
    const { page, pageCount } = secondState.packs.data;
    const { sortPacks } = secondState.packs.cardsPackDataForRequest;
    dispatch(setStatusApp('loading'));
    try {
      await packAPI.createNewPack(data);
      dispatch(setStatusApp('succeed'));
      dispatch(getCardsPack({ user_id: userId, page, pageCount, sortPacks }));
    } catch (e: any) {
      setResponseError(e, dispatch);
    }
    dispatch(setInactiveModalWindow());
  },
);

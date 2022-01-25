import { createAsyncThunk, ThunkDispatch } from '@reduxjs/toolkit';

import { getCardsPack } from 'bll/middlewares/packThunks/getCardsPack';
import { getResponseError } from 'bll/middlewares/utils';
import { setErrorCardsPack, setStatusCardsPack } from 'bll/reducers/pack-slice';
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
    dispatch(setStatusCardsPack('loading'));
    // dispatch({ type: 'ddd', payload: {} });
    try {
      await packAPI.createNewPack(data);
      dispatch(getCardsPack({ user_id: userId, page, pageCount, sortPacks }));
    } catch (e: any) {
      dispatch(setErrorCardsPack(getResponseError(e)));
    }
  },
);

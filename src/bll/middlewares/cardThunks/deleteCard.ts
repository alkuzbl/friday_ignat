import { createAsyncThunk, ThunkDispatch } from '@reduxjs/toolkit';

import { setInactiveModalWindow, setStatusApp } from 'app/app-slice';
import { getAllCards } from 'bll/middlewares/cardThunks/getAllCards';
import { setResponseError } from 'bll/middlewares/utils';
import { AppAction, AppStoreType } from 'bll/store';
import { cardAPI } from 'dal/card-api';

export const deleteCard = createAsyncThunk<
  {},
  { cardsPackId: string; cardId: string },
  {
    dispatch: ThunkDispatch<AppStoreType, undefined, AppAction>;
    state: AppStoreType;
  }
>(
  'card/deleteCard',

  async (data, { dispatch }) => {
    dispatch(setStatusApp('loading'));
    try {
      await cardAPI.deleteCard(data);
      await dispatch(getAllCards({ cardsPack_id: data.cardsPackId }));
      dispatch(setStatusApp('succeed'));
    } catch (e: any) {
      setResponseError(e, dispatch);
    } finally {
      dispatch(setInactiveModalWindow());
    }
  },
);

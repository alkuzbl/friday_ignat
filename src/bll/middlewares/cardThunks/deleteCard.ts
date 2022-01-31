import { createAsyncThunk, ThunkDispatch } from '@reduxjs/toolkit';

import { setInactiveModalWindow } from 'app/app-slice';
import { getAllCards } from 'bll/middlewares/cardThunks/getAllCards';
import {
  CardsActionsType,
  setErrorCard,
  setStatusCard,
} from 'bll/reducers/cardReducer/card-slice';
import { AppStoreType } from 'bll/store';
import { cardAPI } from 'dal/card-api';

export const deleteCard = createAsyncThunk<
  {},
  { cardsPackId: string; cardId: string },
  {
    dispatch: ThunkDispatch<AppStoreType, undefined, CardsActionsType>;
    state: AppStoreType;
  }
>(
  'card/deleteCard',

  async (data, { dispatch }) => {
    dispatch(setStatusCard('loading'));
    try {
      await cardAPI.deleteCard(data);
      await dispatch(getAllCards({ cardsPack_id: data.cardsPackId }));
      dispatch(setStatusCard('succeed'));
    } catch (e: any) {
      const error = e.response
        ? e.response.data.error
        : `${e.message}, more details in the console`;
      dispatch(setErrorCard(error));
      dispatch(setStatusCard('failed'));
    } finally {
      dispatch(setInactiveModalWindow());
    }
  },
);

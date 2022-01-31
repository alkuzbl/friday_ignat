import { createAsyncThunk, ThunkDispatch } from '@reduxjs/toolkit';

import { setInactiveModalWindow } from 'app/app-slice';
import { getAllCards } from 'bll/middlewares/cardThunks/getAllCards';
import {
  CardsActionsType,
  setErrorCard,
  setStatusCard,
} from 'bll/reducers/cardReducer/card-slice';
import { AppStoreType } from 'bll/store';
import { cardAPI, RequestPayloadUpdateCardType } from 'dal/card-api';

export const updateCard = createAsyncThunk<
  {},
  RequestPayloadUpdateCardType & { cardsPack_id: string },
  {
    dispatch: ThunkDispatch<AppStoreType, undefined, CardsActionsType>;
    state: AppStoreType;
  }
>(
  'card/updateCard',

  async (data, { dispatch }) => {
    dispatch(setStatusCard('loading'));
    try {
      await cardAPI.updateCard({
        _id: data._id,
        question: data.question,
        answer: data.answer,
      });
      await dispatch(getAllCards({ cardsPack_id: data.cardsPack_id }));
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

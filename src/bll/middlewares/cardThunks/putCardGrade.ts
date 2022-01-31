import { createAsyncThunk, ThunkDispatch } from '@reduxjs/toolkit';

import {
  CardsActionsType,
  setErrorCard,
  setStatusCard,
} from 'bll/reducers/cardReducer/card-slice';
import { AppStoreType } from 'bll/store';
import { cardAPI, RequestPayloadPutCardGrade } from 'dal/card-api';

export const putCardGrade = createAsyncThunk<
  {},
  RequestPayloadPutCardGrade,
  {
    dispatch: ThunkDispatch<AppStoreType, undefined, CardsActionsType>;
    state: AppStoreType;
  }
>(
  'card/putCardGrade',

  async (data, { dispatch }) => {
    dispatch(setStatusCard('loading'));
    try {
      await cardAPI.putCardGrade(data);
      dispatch(setStatusCard('succeed'));
    } catch (e: any) {
      const error = e.response
        ? e.response.data.error
        : `${e.message}, more details in the console`;
      dispatch(setErrorCard(error));
      dispatch(setStatusCard('failed'));
    }
  },
);

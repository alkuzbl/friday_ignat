import { createAsyncThunk, ThunkDispatch } from '@reduxjs/toolkit';

import {
  setCards,
  setErrorCard,
  setStatusCard,
} from 'bll/reducers/cardReducer/card-slice';
import { AppAction, AppStoreType } from 'bll/store';
import { cardAPI, RequestPayloadGetCardType } from 'dal/card-api';

export const getAllCards = createAsyncThunk<
  {},
  RequestPayloadGetCardType,
  {
    dispatch: ThunkDispatch<AppStoreType, void, AppAction>;
    state: AppStoreType;
  }
>('card/getAllCards', async (data, { dispatch, getState }) => {
  dispatch(setStatusCard('loading'));
  try {
    const { page } = getState().cards.data;
    const { pageCount } = getState().cards.data;
    const { sortCards } = getState().cards.cardsDataForRequest;
    const { cardAnswer } = getState().cards.cardsDataForRequest;
    const { cardQuestion } = getState().cards.cardsDataForRequest;
    const res = await cardAPI.getAllCards({
      ...data,
      page,
      pageCount,
      sortCards,
      cardAnswer,
      cardQuestion,
    });
    dispatch(setCards(res.data));
    dispatch(setStatusCard('succeed'));
  } catch (e: any) {
    const error = e.response
      ? e.response.data.error
      : `${e.message}, more details in the console`;
    dispatch(setErrorCard(error));
    dispatch(setStatusCard('failed'));
  }
});

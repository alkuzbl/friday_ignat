import { createAsyncThunk, ThunkDispatch } from '@reduxjs/toolkit';

import { setStatusApp } from 'app/app-slice';
import { setResponseError } from 'bll/middlewares/utils';
import { setCards } from 'bll/reducers/cardReducer/card-slice';
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
  dispatch(setStatusApp('loading'));
  try {
    const { page, pageCount } = getState().cards.data;
    const { sortCards, cardAnswer, cardQuestion } = getState().cards.cardsDataForRequest;
    const res = await cardAPI.getAllCards({
      ...data,
      page,
      pageCount,
      sortCards,
      cardAnswer,
      cardQuestion,
    });
    dispatch(setCards(res.data));
    dispatch(setStatusApp('succeed'));
  } catch (e: any) {
    setResponseError(e, dispatch);
  }
});

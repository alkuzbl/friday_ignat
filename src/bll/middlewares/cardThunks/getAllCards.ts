import { createAsyncThunk, ThunkDispatch } from '@reduxjs/toolkit';

import { setStatusApp } from 'app/app-slice';
import { setResponseError } from 'bll/middlewares/utils';
import { CardsType } from 'bll/reducers/cardReducer/types';
import { AppAction, AppStoreType } from 'bll/store';
import { cardAPI, RequestPayloadGetCardType } from 'dal/card-api';

export const getAllCards = createAsyncThunk<
  CardsType,
  RequestPayloadGetCardType,
  {
    dispatch: ThunkDispatch<AppStoreType, void, AppAction>;
    state: AppStoreType;
  }
>('card/getAllCards', async (data, { dispatch, getState, rejectWithValue }) => {
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
    return res.data;
  } catch (e: any) {
    setResponseError(e, dispatch);
    return rejectWithValue({});
  }
});

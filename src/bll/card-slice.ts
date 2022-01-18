import { createSlice, Dispatch, PayloadAction, ThunkDispatch } from '@reduxjs/toolkit';

import { setInactiveModalWindow, StatusType } from '../app/app-slice';
import {
  cardAPI,
  RequestPayloadCreateCardType,
  RequestPayloadGetCardType,
} from '../dal/card-api';

import { AppStoreType } from './store';

const cardsInitialState: CardsInitialStateType = {
  data: {
    cards: [],
    packUserId: null as never as string,
    page: 1,
    pageCount: 8,
    cardsTotalCount: null as never as number,
    minGrade: null as never as number,
    maxGrade: null as never as number,
    token: null as never as string,
    tokenDeathTime: null as never as number,
    error: null,
  },
  status: 'idle',
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState: cardsInitialState,
  reducers: {
    setCards: (state, action: PayloadAction<CardsType>) => {
      state.data = action.payload;
    },
    setPage: (state, action: PayloadAction<{ page: number }>) => {
      state.data.page = action.payload.page;
    },
    setErrorCard: (state, action) => {
      state.data.error = action.payload;
    },
    setStatusCard: (state, action: PayloadAction<StatusType>) => {
      state.status = action.payload;
    },
  },
});

// reducer
export const cardsReducer = cardsSlice.reducer;

// actions
export const { setCards, setStatusCard, setErrorCard, setPage } = cardsSlice.actions;

type CardsActionsType =
  | ReturnType<typeof cardsSlice.actions.setCards>
  | ReturnType<typeof cardsSlice.actions.setStatusCard>
  | ReturnType<typeof cardsSlice.actions.setErrorCard>
  | ReturnType<typeof cardsSlice.actions.setPage>;

export const getAllCards =
  (data: RequestPayloadGetCardType) => async (dispatch: Dispatch) => {
    dispatch(setStatusCard('loading'));
    try {
      const res = await cardAPI.getAllCards(data);
      dispatch(setCards(res.data));
      dispatch(setStatusCard('succeed'));
    } catch (e: any) {
      const error = e.response
        ? e.response.data.error
        : `${e.message}, more details in the console`;
      dispatch(setErrorCard(error));
      dispatch(setStatusCard('failed'));
    }
  };

export const addNewCard =
  (data: RequestPayloadCreateCardType) =>
  async (
    dispatch: ThunkDispatch<AppStoreType, undefined, CardsActionsType>,
    getState: () => AppStoreType,
  ) => {
    dispatch(setStatusCard('loading'));
    try {
      await cardAPI.createCard(data);
      const { page } = getState().cards.data;
      const { pageCount } = getState().cards.data;
      dispatch(getAllCards({ cardsPack_id: data.cardsPack_id, page, pageCount }));
      dispatch(setStatusCard('succeed'));
    } catch (e: any) {
      const error = e.response
        ? e.response.data.error
        : `${e.message}, more details in the console`;
      dispatch(setErrorCard(error));
      dispatch(setStatusCard('failed'));
    }
  };

export const deleteCard =
  (data: { cardsPackId: string; cardId: string }) =>
  async (
    dispatch: ThunkDispatch<AppStoreType, undefined, CardsActionsType>,
    getState: () => AppStoreType,
  ) => {
    dispatch(setStatusCard('loading'));
    try {
      await cardAPI.deleteCard(data);
      const { page } = getState().cards.data;
      const { pageCount } = getState().cards.data;
      dispatch(getAllCards({ cardsPack_id: data.cardsPackId, page, pageCount }));
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
  };

// types
export type CardType = {
  _id: string;
  cardsPack_id: string;
  user_id: string;
  answer: string;
  question: string;
  grade: number;
  shots: number;
  type: string;
  rating: number;
  more_id: string;
  created: string;
  updated: string;
  answerImg?: string;
  answerVideo?: string;
  questionImg?: string;
  questionVideo?: string;
};
export type CardsType = {
  cards: CardType[];
  packUserId: string;
  page: number;
  pageCount: number;
  cardsTotalCount: number;
  minGrade: number;
  maxGrade: number;
  token: string;
  tokenDeathTime: number;
  error: null | string;
};
export type CardsInitialStateType = {
  data: CardsType;
  status: StatusType;
};

import { createSlice, Dispatch, PayloadAction, ThunkDispatch } from '@reduxjs/toolkit';

import { setInactiveModalWindow } from 'app/app-slice';
import { StatusType } from 'app/types';
import { AppStoreType } from 'bll/store';
import {
  cardAPI,
  RequestPayloadCreateCardType,
  RequestPayloadGetCardType,
  RequestPayloadPutCardGrade,
  RequestPayloadUpdateCardType,
  SortCardsType,
} from 'dal/card-api';

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
  cardsDataForRequest: {},
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
    setPageCount: (state, action: PayloadAction<{ pageCount: number }>) => {
      state.data.pageCount = action.payload.pageCount;
    },
    setErrorCard: (state, action) => {
      state.data.error = action.payload;
    },
    setStatusCard: (state, action: PayloadAction<StatusType>) => {
      state.status = action.payload;
    },
    setSortingByGrade: (state, action: PayloadAction<SortCardsType>) => {
      state.cardsDataForRequest.sortCards = action.payload;
    },
    setCardQuestionSearch: (state, action: PayloadAction<string | undefined>) => {
      state.cardsDataForRequest.cardQuestion = action.payload;
    },
    setCardAnswerSearch: (state, action: PayloadAction<string | undefined>) => {
      state.cardsDataForRequest.cardAnswer = action.payload;
    },
  },
});

// reducer
export const cardsReducer = cardsSlice.reducer;

// actions
export const {
  setCards,
  setStatusCard,
  setErrorCard,
  setPage,
  setPageCount,
  setSortingByGrade,
  setCardQuestionSearch,
  setCardAnswerSearch,
} = cardsSlice.actions;

type CardsActionsType =
  | ReturnType<typeof cardsSlice.actions.setCards>
  | ReturnType<typeof cardsSlice.actions.setStatusCard>
  | ReturnType<typeof cardsSlice.actions.setErrorCard>
  | ReturnType<typeof cardsSlice.actions.setPage>;

export const getAllCards =
  (data: RequestPayloadGetCardType) =>
  async (dispatch: Dispatch, getState: () => AppStoreType) => {
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
  };

export const addNewCard =
  (data: RequestPayloadCreateCardType) =>
  async (dispatch: ThunkDispatch<AppStoreType, undefined, CardsActionsType>) => {
    dispatch(setStatusCard('loading'));
    try {
      await cardAPI.createCard(data);
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
  };

export const deleteCard =
  (data: { cardsPackId: string; cardId: string }) =>
  async (dispatch: ThunkDispatch<AppStoreType, undefined, CardsActionsType>) => {
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
  };

export const updateCard =
  (data: RequestPayloadUpdateCardType & { cardsPack_id: string }) =>
  async (dispatch: ThunkDispatch<AppStoreType, undefined, CardsActionsType>) => {
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
  };

export const putCardGrade =
  (data: RequestPayloadPutCardGrade) =>
  async (dispatch: ThunkDispatch<AppStoreType, undefined, CardsActionsType>) => {
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

export type CardsDataForRequestType = {
  sortCards?: SortCardsType;
  cardQuestion?: string | undefined;
  cardAnswer?: string | undefined;
};

export type CardsInitialStateType = {
  data: CardsType;
  status: StatusType;
  cardsDataForRequest: CardsDataForRequestType;
};

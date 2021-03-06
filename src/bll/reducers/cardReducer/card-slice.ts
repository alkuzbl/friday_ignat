import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SortCardsType } from 'dal/card-api';

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
  setPage,
  setPageCount,
  setSortingByGrade,
  setCardQuestionSearch,
  setCardAnswerSearch,
} = cardsSlice.actions;

export type CardsActionsType =
  | ReturnType<typeof cardsSlice.actions.setCards>
  | ReturnType<typeof cardsSlice.actions.setPage>;

// style
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
  cardsDataForRequest: CardsDataForRequestType;
};

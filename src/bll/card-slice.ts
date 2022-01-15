import { createSlice } from '@reduxjs/toolkit';

import { StatusType } from '../app/app-slice';

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
    setCards: () => {},
    createCard: () => {},
    deleteCard: () => {},
    updateCard: () => {},
    setPageCount: () => {},
    setErrorCard: () => {},
    setStatusCard: () => {},
  },
});

// reducer
export const cardsReducer = cardsSlice.reducer;

// actions
export const { deleteCard, setCards, updateCard, createCard } = cardsSlice.actions;

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

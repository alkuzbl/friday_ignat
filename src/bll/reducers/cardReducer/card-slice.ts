import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getAllCards } from 'bll/middlewares';
import { CardsInitialStateType } from 'bll/reducers/cardReducer/types';
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
  extraReducers: builder => {
    builder.addCase(getAllCards.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

// reducer
export const cardsReducer = cardsSlice.reducer;

// actions
export const {
  setPage,
  setPageCount,
  setSortingByGrade,
  setCardQuestionSearch,
  setCardAnswerSearch,
} = cardsSlice.actions;

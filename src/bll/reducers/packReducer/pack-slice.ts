import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getCardsPack, logout, updateCardsPack } from 'bll/middlewares';
import {
  CardsPackDataForRequestType,
  PackInitialStateType,
} from 'bll/reducers/packReducer/types';

const packInitialState: PackInitialStateType = {
  data: {
    cardPacks: [],
    page: 1,
    pageCount: 6,
    cardPacksTotalCount: 0,
    minCardsCount: undefined,
    maxCardsCount: undefined,
    token: undefined,
    tokenDeathTime: undefined,
  },
  cardsPackDataForRequest: {} as CardsPackDataForRequestType,
};

const packSlice = createSlice({
  name: 'pack',
  initialState: packInitialState,
  reducers: {
    setPageCount: (state, action: PayloadAction<{ pageCount: number }>) => {
      state.data.pageCount = action.payload.pageCount;
    },
    setPage: (state, action: PayloadAction<{ page: number }>) => {
      state.data.page = action.payload.page;
    },
    setCardsPackDataForRequest: (
      state,
      action: PayloadAction<CardsPackDataForRequestType>,
    ) => {
      state.cardsPackDataForRequest = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(logout.fulfilled, state => {
      state.data = {
        cardPacks: [],
        page: 1,
        pageCount: 6,
        cardPacksTotalCount: 0,
        minCardsCount: undefined,
        maxCardsCount: undefined,
        token: undefined,
        tokenDeathTime: undefined,
      };
    });
    builder.addCase(updateCardsPack.fulfilled, (state, action) => {
      state.data.cardPacks = state.data.cardPacks.map(pack =>
        pack._id === action.payload._id ? { ...pack, ...action.payload } : pack,
      );
    });
    builder.addCase(getCardsPack.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

// reducer
export const packReducer = packSlice.reducer;
// actions
export const { setPageCount, setPage, setCardsPackDataForRequest } = packSlice.actions;

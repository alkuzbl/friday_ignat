import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { logout } from 'bll/middlewares';
import {
  CardPackType,
  CardsPackDataForRequestType,
  DataPackType,
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
    setPacks: (state, action: PayloadAction<DataPackType>) => {
      state.data = action.payload;
    },
    updatePack: (state, action: PayloadAction<CardPackType>) => {
      state.data.cardPacks = state.data.cardPacks.map(pack =>
        pack._id === action.payload._id ? { ...pack, ...action.payload } : pack,
      );
    },
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
  },
});

// reducer
export const packReducer = packSlice.reducer;
// actions
export const { setPacks, updatePack, setPageCount, setPage, setCardsPackDataForRequest } =
  packSlice.actions;

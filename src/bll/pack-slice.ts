import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StatusType } from '../app/app-slice';

const packInitialState: PackInitialStateType = {
  data: {
    cardPacks: [],
    page: 1,
    pageCount: 8,
    cardPacksTotalCount: null as unknown as number,
    minCardsCount: null as unknown as number,
    maxCardsCount: null as unknown as number,
    token: null as unknown as string,
    tokenDeathTime: null as unknown as number,
    error: null as unknown as string,
  },
  status: 'idle',
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
    setStatusCardsPack: (state, action: PayloadAction<StatusType>) => {
      state.status = action.payload;
    },
    setErrorCardsPack: (state, action: PayloadAction<string>) => {
      state.data.error = action.payload;
    },
  },
});

// reducer
export const packReducer = packSlice.reducer;
// actions
export const {
  setPacks,
  updatePack,
  setPageCount,
  setErrorCardsPack,
  setStatusCardsPack,
} = packSlice.actions;

// thanks

// types
export type CardPackType = {
  _id: string;
  user_id: string;
  user_name: string;
  private: boolean;
  name: string;
  path: string;
  grade: number;
  shots: number;
  cardsCount: number;
  type: string;
  rating: number;
  created: string;
  updated: string;
  more_id: string;
};
export type DataPackType = {
  cardPacks: CardPackType[];
  page: number;
  pageCount: number;
  cardPacksTotalCount: number;
  minCardsCount: number;
  maxCardsCount: number;
  token: string;
  tokenDeathTime: number;
  error: string;
};
export type PackInitialStateType = {
  data: DataPackType;
  status: StatusType;
};

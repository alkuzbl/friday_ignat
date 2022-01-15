import { createSlice } from '@reduxjs/toolkit';

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
    setPacks: () => {},
    createPack: () => {},
    removePack: () => {},
    updatePack: () => {},
    setPageCount: () => {},
    setStatusCardsPack: () => {},
    setErrorCardsPack: () => {},
    setActiveModalCardsPack: () => {},
  },
});

// reducer
export const packReducer = packSlice.reducer;
// actions
export const {
  setPacks,
  removePack,
  updatePack,
  createPack,
  setPageCount,
  setErrorCardsPack,
  setStatusCardsPack,
  setActiveModalCardsPack,
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

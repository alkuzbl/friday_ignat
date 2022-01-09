import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';

import { packAPI } from '../dal/pakc-api';

const packInitialState = {
  cardPacks: [
    {
      _id: '61d9fec45b54c80004e5c607',
      user_id: '61b91c1ca732663958ceb125',
      user_name: 'Dimond@list.ru',
      private: false,
      name: 'asdasd',
      path: '/def',
      grade: 0,
      shots: 0,
      cardsCount: 2,
      type: 'pack',
      rating: 0,
      created: '2022-01-08T21:14:44.425Z',
      updated: '2022-01-08T21:15:10.168Z',
      more_id: '61b91c1ca732663958ceb125',
      __v: 0,
    },
    {
      _id: '61d9f46b08c08e08bc53603c',
      user_id: '61b65543655534000420210f',
      user_name: 'nastyh1233@gmail.com',
      private: false,
      name: 'sdsds',
      path: '/def',
      grade: 0,
      shots: 0,
      cardsCount: 3,
      type: 'pack',
      rating: 0,
      created: '2022-01-08T20:30:35.073Z',
      updated: '2022-01-08T20:44:59.033Z',
      more_id: '61b65543655534000420210f',
      __v: 0,
    },
  ],
  page: 1,
  pageCount: 8,
  cardPacksTotalCount: 3771,
  minCardsCount: 0,
  maxCardsCount: 103,
  token: 'f3a7c6b0-711a-11ec-92e8-0bc545103dad',
  tokenDeathTime: 1642316911259,
  error: null,
  status: 'idle',
};
const packSlice = createSlice({
  name: 'pack',
  initialState: packInitialState,
  reducers: {
    setPacks: (state, action: PayloadAction<CardPackType[]>) => {
      state.cardPacks = action.payload;
    },
    createPack: (state, action: PayloadAction<CardPackType>) => {
      state.cardPacks.unshift(action.payload);
    },
    removePack: (state, action: PayloadAction<{ _id: string }>) => {
      state.cardPacks = state.cardPacks.filter(pack => pack._id !== action.payload._id);
    },
    updatePack: (state, action: PayloadAction<CardPackType>) => {
      state.cardPacks = state.cardPacks.map(pack =>
        pack._id === action.payload._id ? { ...pack, ...action.payload } : pack,
      );
    },
    setPageCount: (state, action: PayloadAction<{ pageCount: number }>) => {
      state.pageCount = action.payload.pageCount;
    },
  },
});

// reducer
export const packReducer = packSlice.reducer;
// actions
export const { setPacks, removePack, updatePack, createPack, setPageCount } =
  packSlice.actions;

// thank
export const getCardsPack =
  (data: { page: number; pageCount: number }) => async (dispatch: Dispatch) => {
    try {
      const cardsPackData = await packAPI.getAllPack(data);
      dispatch(setPacks(cardsPackData.data.cardPacks));
    } catch (err) {
      console.log('error');
    }
  };

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
  __v: number;
};

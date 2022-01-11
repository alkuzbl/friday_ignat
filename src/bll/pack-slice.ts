import { createSlice } from '@reduxjs/toolkit';

const packInitialState: CardsPackType = {
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
  cardPacksTotalCount: 0,
  minCardsCount: 0,
  maxCardsCount: 0,
  token: null as unknown as string,
  tokenDeathTime: null as unknown as number,
  error: null as unknown as string,
  status: 'idle',
  modalWindow: {
    activeModal: false,
    packName: '',
    packId: '',
  },
};
// логика убита!!!
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
  __v: number;
};

export type CardsPackType = {
  cardPacks: CardPackType[];
  page: number;
  pageCount: number;
  cardPacksTotalCount: number;
  minCardsCount: number;
  maxCardsCount: number;
  token: string;
  tokenDeathTime: number;
  error: string;
  status: StatusType;
  modalWindow: {
    activeModal: boolean;
    packName: string;
    packId: string;
  };
};
type StatusType = 'idle' | 'loading' | 'succeeded' | 'failed';

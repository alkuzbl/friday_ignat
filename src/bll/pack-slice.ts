import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';

import {
  packAPI,
  RequestPayloadCreatePackType,
  RequestPayloadUpdatePackType,
} from '../dal/pakc-api';

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
const packSlice = createSlice({
  name: 'pack',
  initialState: packInitialState,
  reducers: {
    setPacks: (state, action: PayloadAction<Omit<CardsPackType, 'status'>>) => {
      state.cardPacks = action.payload.cardPacks;
      state.cardPacksTotalCount = action.payload.cardPacksTotalCount;
      state.page = action.payload.page;
      state.pageCount = action.payload.pageCount;
      state.minCardsCount = action.payload.minCardsCount;
      state.maxCardsCount = action.payload.maxCardsCount;
      state.token = action.payload.token;
    },
    createPack: (state, action: PayloadAction<CardPackType>) => {
      state.cardPacks.unshift(action.payload);
    },
    removePack: (state, action: PayloadAction<{ packId: string }>) => {
      state.modalWindow.packId = '';
      state.modalWindow.packName = '';
      state.modalWindow.activeModal = false;
      state.cardPacks = state.cardPacks.filter(
        pack => pack._id !== action.payload.packId,
      );
    },
    updatePack: (state, action: PayloadAction<CardPackType>) => {
      state.cardPacks = state.cardPacks.map(pack =>
        pack._id === action.payload._id ? { ...pack, ...action.payload } : pack,
      );
    },
    setPageCount: (state, action: PayloadAction<{ pageCount: number }>) => {
      state.pageCount = action.payload.pageCount;
    },
    setStatusCardsPack: (state, action: PayloadAction<{ status: StatusType }>) => {
      state.status = action.payload.status;
    },
    setErrorCardsPack: (state, action: PayloadAction<{ error: string }>) => {
      state.error = action.payload.error;
    },
    setActiveModalCardsPack: (
      state,
      action: PayloadAction<{ status: boolean; packName: string; packId: string }>,
    ) => {
      state.modalWindow.activeModal = action.payload.status;
      state.modalWindow.packId = action.payload.packId;
      state.modalWindow.packName = action.payload.packName;
    },
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
export const getCardsPack =
  (data: { page: number; pageCount: number }) => async (dispatch: Dispatch) => {
    try {
      const cardsPackData = await packAPI.getAllPack(data);
      dispatch(setPacks(cardsPackData.data));
    } catch (err) {
      console.log('error');
    }
  };

export const deleteCardsPack = (packId: string) => async (dispatch: Dispatch) => {
  try {
    const response = await packAPI.deletePack(packId);
    dispatch(removePack({ packId: response.data.deletedCardsPack._id }));
  } catch (err) {
    console.log(err);
  }
};

export const updateCardsPack =
  (data: RequestPayloadUpdatePackType) => async (dispatch: Dispatch) => {
    try {
      const response = await packAPI.updatePack(data);
      dispatch(updatePack(response.data.updatedCardsPack));
    } catch (err) {
      console.log(err);
    }
  };

export const createCardsPack =
  (data: RequestPayloadCreatePackType) => async (dispatch: Dispatch) => {
    try {
      const response = await packAPI.createNewPack(data);
      dispatch(createPack(response.data.newCardsPack));
    } catch (err) {
      console.log(err);
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

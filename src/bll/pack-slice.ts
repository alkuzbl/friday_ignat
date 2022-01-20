import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';

import {
  ModalWindowPackType,
  setInactiveModalWindow,
  StatusType,
} from '../app/app-slice';
import { packAPI, RequestGetPayloadPacksType } from '../dal/pack-api';

import { setLogout } from './auth-slice';
import { AppStoreType } from './store';

const packInitialState: PackInitialStateType = {
  data: {
    cardPacks: [],
    page: 1,
    pageCount: 6,
    cardPacksTotalCount: null as unknown as number,
    minCardsCount: null as unknown as number,
    maxCardsCount: null as unknown as number,
    token: null as unknown as string,
    tokenDeathTime: null as unknown as number,
    error: null as unknown as string,
  },
  status: 'idle',
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
    setStatusCardsPack: (state, action: PayloadAction<StatusType>) => {
      state.status = action.payload;
    },
    setErrorCardsPack: (state, action: PayloadAction<string>) => {
      state.data.error = action.payload;
    },
    clearCardPacksData: state => {
      state.data.cardPacks = [];
    },
    setCardsCount: (state, action: PayloadAction<CardsPackDataForRequestType>) => {
      state.cardsPackDataForRequest = {
        ...state.cardsPackDataForRequest,
        ...action.payload,
      };
    },
    setPackNameSearch: (state, action: PayloadAction<CardsPackDataForRequestType>) => {
      state.cardsPackDataForRequest = {
        ...state.cardsPackDataForRequest,
        ...action.payload,
      };
    },
    setSortingByDate: (state, action: PayloadAction<CardsPackDataForRequestType>) => {
      state.cardsPackDataForRequest = {
        ...state.cardsPackDataForRequest,
        ...action.payload,
      };
    },
  },
  extraReducers: builder => {
    builder.addCase(setLogout, state => {
      state.data = {
        cardPacks: [],
        page: 1,
        pageCount: 6,
        cardPacksTotalCount: null as unknown as number,
        minCardsCount: null as unknown as number,
        maxCardsCount: null as unknown as number,
        token: null as unknown as string,
        tokenDeathTime: null as unknown as number,
        error: null as unknown as string,
      };
    });
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
  setPage,
  clearCardPacksData,
  setCardsCount,
  setPackNameSearch,
  setSortingByDate,
} = packSlice.actions;

// thunks
export const getCardsPack =
  (data: RequestGetPayloadPacksType) => async (dispatch: Dispatch) => {
    dispatch(setStatusCardsPack('loading'));
    try {
      const res = await packAPI.getCardsPack(data);
      dispatch(setPacks(res.data));
      dispatch(setStatusCardsPack('succeed'));
    } catch (e: any) {
      const error = e.response
        ? e.response.data.error
        : `${e.message}, more details in the console`;
      dispatch(setErrorCardsPack(error));
      dispatch(setStatusCardsPack('failed'));
    }
  };
// затипизировать
export const deleteCardsPack =
  () => async (dispatch: Dispatch<any>, getState: () => AppStoreType) => {
    const secondState = getState();
    // @ts-ignore
    const { _id } = secondState.app.modalWindow.modalWindowData;
    const userId = secondState.auth.user._id;
    const { page, pageCount } = secondState.packs.data;
    dispatch(setStatusCardsPack('loading'));
    try {
      await packAPI.deletePack({ id: _id });
      dispatch(getCardsPack({ user_id: userId, page, pageCount }));
      dispatch(setStatusCardsPack('succeed'));
    } catch (e: any) {
      const error = e.response
        ? e.response.data.error
        : `${e.message}, more details in the console`;
      dispatch(setErrorCardsPack(error));
      dispatch(setStatusCardsPack('failed'));
    }
    dispatch(setInactiveModalWindow());
  };

export const createNewPack =
  (data: { name: string }) =>
  async (dispatch: Dispatch<any>, getState: () => AppStoreType) => {
    const secondState = getState();
    const userId = secondState.auth.user._id;
    const { page, pageCount } = secondState.packs.data;
    const { sortPacks } = secondState.packs.cardsPackDataForRequest;
    dispatch(setStatusCardsPack('loading'));
    try {
      await packAPI.createNewPack(data);
      dispatch(getCardsPack({ user_id: userId, page, pageCount, sortPacks }));
      dispatch(setStatusCardsPack('succeed'));
    } catch (e: any) {
      const error = e.response
        ? e.response.data.error
        : `${e.message}, more details in the console`;
      dispatch(setErrorCardsPack(error));
      dispatch(setStatusCardsPack('failed'));
    }
    dispatch(setInactiveModalWindow());
  };

export const updateCardsPack =
  (data: ModalWindowPackType) => async (dispatch: Dispatch) => {
    dispatch(setStatusCardsPack('loading'));
    try {
      const res = await packAPI.updatePack(data);
      dispatch(updatePack(res.data.updatedCardsPack));
      dispatch(setStatusCardsPack('succeed'));
    } catch (e: any) {
      const error = e.response
        ? e.response.data.error
        : `${e.message}, more details in the console`;
      dispatch(setErrorCardsPack(error));
      dispatch(setStatusCardsPack('failed'));
    }
    dispatch(setInactiveModalWindow());
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
export type CardsPackDataForRequestType = {
  min?: number;
  max?: number;
  packName?: string | undefined;
  sortPacks?: 0 | 1 | undefined;
};
export type PackInitialStateType = {
  data: DataPackType;
  status: StatusType;
  cardsPackDataForRequest: CardsPackDataForRequestType;
};

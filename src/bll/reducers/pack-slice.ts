import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StatusType } from 'app/app-slice';
import {
  createNewPack,
  deleteCardsPack,
  getCardsPack,
  logout,
  updateCardsPack,
} from 'bll/middlewares';
import { SortValueType } from 'components/common/SortButton/SortButton/types';

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
    clearCardsPackDataForRequest: state => {
      state.cardsPackDataForRequest = {};
    },
    setCardsPackDataForRequest: (
      state,
      action: PayloadAction<CardsPackDataForRequestType>,
    ) => {
      state.cardsPackDataForRequest = {
        ...state.cardsPackDataForRequest,
        ...action.payload,
      };
    },
  },
  extraReducers: builder => {
    builder.addCase(logout.fulfilled, state => {
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
    builder.addCase(getCardsPack.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'succeed';
    });
    builder.addCase(getCardsPack.rejected, (state, action) => {
      state.data.error = action.payload;
      state.status = 'failed';
    });

    builder.addCase(deleteCardsPack.fulfilled, state => {
      state.status = 'succeed';
    });
    builder.addCase(deleteCardsPack.rejected, (state, action) => {
      state.data.error = action.payload;
      state.status = 'failed';
    });

    builder.addCase(createNewPack.fulfilled, state => {
      state.status = 'succeed';
    });

    builder.addCase(updateCardsPack.fulfilled, state => {
      state.status = 'succeed';
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
  clearCardsPackDataForRequest,
  setCardsPackDataForRequest,
} = packSlice.actions;

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
  error: string | unknown;
};
export type CardsPackDataForRequestType = {
  min?: number;
  max?: number;
  packName?: string | undefined;
  sortPacks?: SortValueType;
};
export type PackInitialStateType = {
  data: DataPackType;
  status: StatusType;
  cardsPackDataForRequest: CardsPackDataForRequestType;
};

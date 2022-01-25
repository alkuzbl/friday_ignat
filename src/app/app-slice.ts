import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getAuthUser } from 'bll/middlewares';
import { createNewPack } from 'bll/middlewares/packThunks/createNewPack';
import { deleteCardsPack } from 'bll/middlewares/packThunks/deleteCardsPack';

const initialState: AppInitialStateType = {
  isInitialized: false,
  error: null,
  modalWindow: {
    modalWindowStatus: false,
    modalWindowName: null,
    modalWindowData: {},
  },
};
enum GradeLevel {
  noRating = 0,
  dontKnow = 1,
  dontKnowVeryWell = 2,
  KnowWell = 3,
  KnowVeryWell = 4,
  KnowPerfectly = 5,
}
const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsInitialized: (state, action: PayloadAction<boolean>) => {
      state.isInitialized = action.payload;
    },
    setErrorApp: (state, action) => {
      state.error = action.payload;
    },
    setActiveModalWindow: (
      state,
      action: PayloadAction<{
        name: ModalWindowNameType;
        modalWindowData: ModalWindowPackType | ModalWindowCardType;
      }>,
    ) => {
      state.modalWindow.modalWindowStatus = true;
      state.modalWindow.modalWindowName = action.payload.name;
      state.modalWindow.modalWindowData = action.payload.modalWindowData;
    },
    setInactiveModalWindow: state => {
      state.modalWindow.modalWindowStatus = false;
      state.modalWindow.modalWindowName = null;
      state.modalWindow.modalWindowData = {};
    },
  },
  extraReducers: builder => {
    builder.addCase(getAuthUser.fulfilled, state => {
      state.isInitialized = true;
    });
    builder.addCase(getAuthUser.rejected, state => {
      state.isInitialized = true;
    });
    // очищение сделать после получения новых пакетов и логику в принципе по ошибкам пересмореть
    builder.addCase(deleteCardsPack.fulfilled, state => {
      state.modalWindow.modalWindowStatus = false;
    });
    builder.addCase(createNewPack.fulfilled, state => {
      state.modalWindow.modalWindowStatus = false;
    });
  },
});

export const appReducer = appSlice.reducer;

export const {
  setIsInitialized,
  setErrorApp,
  setActiveModalWindow,
  setInactiveModalWindow,
} = appSlice.actions;

// thunks

// types
export type AppInitialStateType = {
  isInitialized: boolean;
  error: string | null;
  modalWindow: ModalWindowType;
};
export type ModalWindowNameType =
  | null
  | 'delete-pack'
  | 'create-pack'
  | 'edit-pack-name'
  | 'create-card'
  | 'edit-card'
  | 'delete-card';

export type ModalWindowPackType = {
  _id?: string;
  name?: string;
  rating?: number;
  private?: boolean;
};

export type ModalWindowCardType = {
  _id?: string;
  cardsPackId?: string;
  cardId?: string;
  question?: string;
  answer?: string;
  grade?: GradeLevel;
  shots?: number;
  rating?: number;
  answerImg?: string;
  questionImg?: string;
  questionVideo?: string;
  answerVideo?: string;
  type?: string;
};

type ModalWindowType = {
  modalWindowStatus: boolean;
  modalWindowName: ModalWindowNameType;
  modalWindowData: ModalWindowPackType | ModalWindowCardType;
};
export type StatusType = 'idle' | 'loading' | 'succeed' | 'failed';

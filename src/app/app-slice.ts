import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  AppInitialStateType,
  ModalWindowCardType,
  ModalWindowNameType,
  ModalWindowPackType,
  StatusType,
} from 'app/types';
import { getAllCards, getAuthUser, getCardsPack, getUserProfile } from 'bll/middlewares';
import { createNewPack } from 'bll/middlewares/packThunks/createNewPack';
import { deleteCardsPack } from 'bll/middlewares/packThunks/deleteCardsPack';

const initialState: AppInitialStateType = {
  isInitialized: false,
  error: null,
  status: 'idle',
  modalWindow: {
    modalWindowStatus: false,
    modalWindowName: null,
    modalWindowData: {},
  },
};
export enum GradeLevel {
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
    setErrorApp: (state, action) => {
      state.error = action.payload;
      state.status = 'failed';
    },
    clearErrorApp: state => {
      state.error = null;
      state.status = 'idle';
    },
    setStatusApp: (state, action: PayloadAction<StatusType>) => {
      state.status = action.payload;
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
    // очищение сделать после получения новых пакетов и логику в принципе по ошибкам пересмотреть
    builder.addCase(deleteCardsPack.fulfilled, state => {
      state.modalWindow.modalWindowStatus = false;
    });
    builder.addCase(createNewPack.fulfilled, state => {
      state.modalWindow.modalWindowStatus = false;
    });
    builder.addCase(getCardsPack.fulfilled, state => {
      state.status = 'succeed';
    });
    builder.addCase(getAllCards.fulfilled, state => {
      state.status = 'succeed';
    });
    builder.addCase(getUserProfile.fulfilled, state => {
      state.status = 'succeed';
    });
  },
});

export const appReducer = appSlice.reducer;

export const {
  setErrorApp,
  clearErrorApp,
  setActiveModalWindow,
  setInactiveModalWindow,
  setStatusApp,
} = appSlice.actions;

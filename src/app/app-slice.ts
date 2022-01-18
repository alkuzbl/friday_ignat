import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: InitialStateType = {
  isInitialized: false,
  error: null,
  modalWindow: {
    modalWindowStatus: false,
    modalWindowName: null,
    modalWindowData: {},
  },
};

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
type InitialStateType = {
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
  cardsPack_id?: string; // можно ли пользоваться не camelCase - спросить в поддержке
  cardId?: string; // у Игната card_id (на деструктаризацию ругается esLint)
  question?: string;
  answer?: string;
  grade?: 0 | 1 | 2 | 3 | 4 | 5;
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

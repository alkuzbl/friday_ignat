import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: InitialStateType = {
  isInitialized: false,
  error: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    // принимает state, action
    setIsInitialized: (state, action: PayloadAction<boolean>) => {
      state.isInitialized = action.payload;
    },
    setErrorApp: (state, action) => {
      state.error = action.payload;
    },
  },
});

// reducer - export в store
export const appReducer = appSlice.reducer;

// actions по сути аналог actionCreator
export const { setIsInitialized, setErrorApp } = appSlice.actions;

// thunks

// types
type InitialStateType = {
  isInitialized: boolean;
  error: string | null;
};

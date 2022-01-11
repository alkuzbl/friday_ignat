import { createSlice } from '@reduxjs/toolkit';

const initialState: InitialStateType = {
  isInitialized: false,
  error: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    // принимает state, action
    initializeApp: () => {},
    setErrorApp: () => {},
  },
});

// reducer - export в store
export const appReducer = appSlice.reducer;

// actions по сути аналог actionCreator
export const { initializeApp, setErrorApp } = appSlice.actions;

// thanks

// types
type InitialStateType = {
  isInitialized: boolean;
  error: string | null;
};

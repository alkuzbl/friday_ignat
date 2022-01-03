import { createSlice } from '@reduxjs/toolkit';

const initialState: InitialStateType = {
  isInitialized: false,
  error: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    initializeApp: (state, action) => {
      state.isInitialized = action.payload;
    },
    setErrorApp: (state, action) => {
      state.error = action.payload;
    },
  },
});

// reducer
export const appReducer = appSlice.reducer;

// actions
export const { initializeApp, setErrorApp } = appSlice.actions;

// thanks

// types
type InitialStateType = {
  isInitialized: boolean;
  error: string | null;
};

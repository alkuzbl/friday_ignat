import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InitialStateAuthType } from 'bll/reducers/types';
import { UserType } from 'dal/auth-api';

const initialState: InitialStateAuthType = {
  user: {} as UserType,
  isAuth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogout: state => {
      state.user = {} as UserType;
      state.isAuth = false;
    },
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setUserData: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
    getAuthMe: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
    setLogin: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
      state.isAuth = true;
    },
  },
});

// actions
export const { setLogout, setUserData, setIsAuth, getAuthMe, setLogin } =
  authSlice.actions;
// reducer
export const authReducer = authSlice.reducer;

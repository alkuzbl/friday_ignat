import { createSlice } from '@reduxjs/toolkit';

import { UserType } from '../dal/auth-api';

const initialState: InitialStateType = {
  user: {} as UserType,
  isAuth: false,
  error: null,
  status: 'idle',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthError: () => {},
    setStatus: () => {},
    setIsAuth: () => {},
    setLogout: () => {},
    setUserData: () => {},
    getAuthMe: () => {},
    addNewUser: () => {},
  },
});

// actions
export const { setIsAuth, setUserData, setAuthError, setLogout, addNewUser, setStatus } =
  authSlice.actions;

// reducer
export const authReducer = authSlice.reducer;

// thanks

// types
type InitialStateType = {
  user: UserType;
  isAuth: boolean;
  error: string | null;
  status: StatusType;
};

export type StatusType = 'idle' | 'loading' | 'succeed' | 'failed';

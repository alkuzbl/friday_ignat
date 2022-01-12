import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';

import { authAPI, LoginDataType, RegisterUserDataType, UserType } from '../dal/auth-api';

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
    setAuthError: (state, action) => {
      state.error = action.payload;
    },
    setStatus: (state, action: PayloadAction<StatusType>) => {
      state.status = action.payload;
    },
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setLogout: () => {},
    setUserData: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
    getAuthMe: () => {},
    addNewUser: (state, action: PayloadAction<StatusType>) => {
      state.status = action.payload;
    },
  },
});

// actions
export const { setIsAuth, setUserData, setAuthError, setLogout, addNewUser, setStatus } =
  authSlice.actions;

// reducer
export const authReducer = authSlice.reducer;

// thunks
export const login = (data: LoginDataType) => (dispatch: Dispatch) => {
  dispatch(setStatus('loading'));
  authAPI
    .setAuth(data)
    .then(res => {
      dispatch(setIsAuth(true));
      dispatch(setUserData(res.data));
      dispatch(setStatus('succeed'));
    })
    .catch(e => {
      const error = e.response
        ? e.response.data.error
        : `${e.message}, more details in the console`;
      console.log('Error: ', { ...e });
      dispatch(setAuthError(error));
      dispatch(setStatus('failed'));
    });
};

export const registerUser = (data: RegisterUserDataType) => (dispatch: Dispatch) => {
  dispatch(setStatus('loading'));
  authAPI
    .setRegistration(data)
    .then(() => dispatch(setStatus('succeed')))
    .catch(e => {
      const error = e.response
        ? e.response.data.error
        : `${e.message}, more details in the console`;
      console.log('Error: ', { ...e });
      dispatch(setAuthError(error));
      dispatch(setStatus('failed'));
    });
};

// types
type InitialStateType = {
  user: UserType;
  isAuth: boolean;
  error: string | null;
  status: StatusType;
};

export type StatusType = 'idle' | 'loading' | 'succeed' | 'failed';

import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';

import { setIsInitialized } from '../app/app-slice';
import {
  authAPI,
  ForgotDataType,
  LoginDataType,
  NewPasswordDataType,
  RegisterUserDataType,
  UserType,
} from '../dal/auth-api';

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
    setLogout: state => {
      state.user = {} as UserType;
    },
    setUserData: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
    getAuthMe: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
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
      dispatch(setAuthError(error));
      dispatch(setStatus('failed'));
    });
};

export const logout = () => (dispatch: Dispatch) => {
  authAPI
    .setLogOut({})
    .then(() => {
      dispatch(setLogout());
      dispatch(setIsAuth(false));
    })
    .catch(e => {
      const error = e.response
        ? e.response.data.error
        : `${e.message}, more details in the console`;
      dispatch(setAuthError(error));
    });
};

export const getAuthUser = () => (dispatch: Dispatch) => {
  authAPI
    .getAuthMe({})
    .then(res => {
      dispatch(setIsAuth(true));
      dispatch(setUserData(res.data));
    })
    .catch(e => {
      const error = e.response
        ? e.response.data.error
        : `${e.message}, more details in the console`;
      dispatch(setAuthError(error));
    })
    .finally(() => dispatch(setIsInitialized(true)));
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
      dispatch(setAuthError(error));
      dispatch(setStatus('failed'));
    });
};

export const forgotPassword = (data: ForgotDataType) => (dispatch: Dispatch) => {
  authAPI
    .getForgotPassword(data)
    .then(() => dispatch(setStatus('succeed')))
    .catch(e => {
      const error = e.response
        ? e.response.data.error
        : `${e.message}, more details in the console`;
      dispatch(setAuthError(error));
      dispatch(setStatus('failed'));
    });
};

export const setNewPassword = (data: NewPasswordDataType) => (dispatch: Dispatch) => {
  authAPI
    .setNewPassword(data)
    .then(() => dispatch(setStatus('succeed')))
    .catch(e => {
      const error = e.response
        ? e.response.data.error
        : `${e.message}, more details in the console`;
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

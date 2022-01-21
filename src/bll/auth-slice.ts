import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';

import { setIsInitialized, StatusType } from '../app/app-slice';
import {
  authAPI,
  ForgotDataType,
  LoginDataType,
  NewPasswordDataType,
  RegisterUserDataType,
  UpdateUserDataType,
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
      state.error = null;
    },
    setLogout: state => {
      state.user = {} as UserType;
    },
    setUserData: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
    getAuthMe: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
      state.error = null;
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
export const login = (data: LoginDataType) => async (dispatch: Dispatch) => {
  dispatch(setStatus('loading'));
  try {
    const res = await authAPI.setAuth(data);
    dispatch(setUserData(res.data));
    dispatch(setIsAuth(true));
    dispatch(setStatus('succeed'));
  } catch (e: any) {
    const error = e.response
      ? e.response.data.error
      : `${e.message}, more details in the console`;
    dispatch(setAuthError(error));
    dispatch(setStatus('failed'));
  }
};

export const logout = () => async (dispatch: Dispatch) => {
  try {
    await authAPI.setLogOut({});
    dispatch(setLogout());
    dispatch(setIsAuth(false));
  } catch (e: any) {
    const error = e.response
      ? e.response.data.error
      : `${e.message}, more details in the console`;
    dispatch(setAuthError(error));
  }
};

export const getAuthUser = () => async (dispatch: Dispatch) => {
  try {
    const res = await authAPI.getAuthMe({});
    dispatch(setUserData(res.data));
    dispatch(setIsAuth(true));
  } catch (e: any) {
    const error = e.response
      ? e.response.data.error
      : `${e.message}, more details in the console`;
    dispatch(setAuthError(error));
  }
  dispatch(setIsInitialized(true));
};

export const registerUser =
  (data: RegisterUserDataType) => async (dispatch: Dispatch) => {
    dispatch(setStatus('loading'));
    try {
      await authAPI.setRegistration(data);
      dispatch(setStatus('succeed'));
    } catch (e: any) {
      const error = e.response
        ? e.response.data.error
        : `${e.message}, more details in the console`;
      dispatch(setAuthError(error));
      dispatch(setStatus('failed'));
    }
  };

export const forgotPassword = (data: ForgotDataType) => async (dispatch: Dispatch) => {
  try {
    await authAPI.getForgotPassword(data);
    dispatch(setStatus('succeed'));
  } catch (e: any) {
    const error = e.response
      ? e.response.data.error
      : `${e.message}, more details in the console`;
    dispatch(setAuthError(error));
    dispatch(setStatus('failed'));
  }
};

export const setNewPassword =
  (data: NewPasswordDataType) => async (dispatch: Dispatch) => {
    try {
      await authAPI.setNewPassword(data);
      dispatch(setStatus('succeed'));
    } catch (e: any) {
      const error = e.response
        ? e.response.data.error
        : `${e.message}, more details in the console`;
      dispatch(setAuthError(error));
      dispatch(setStatus('failed'));
    }
  };

export const updatedUserData =
  (data: UpdateUserDataType) => async (dispatch: Dispatch) => {
    try {
      const res = await authAPI.setUpdatedUserData(data);
      dispatch(setUserData(res.data.updatedUser));
      dispatch(setStatus('succeed'));
    } catch (e: any) {
      const error = e.response
        ? e.response.data.error
        : `${e.message}, more details in the console`;
      dispatch(setAuthError(error));
      dispatch(setStatus('failed'));
    }
  };

// types
type InitialStateType = {
  user: UserType;
  isAuth: boolean;
  error: string | null;
  status: StatusType;
};

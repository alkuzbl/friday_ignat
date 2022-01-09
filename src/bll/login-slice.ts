import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';

import { initializeApp, setErrorApp } from '../app/app-slice';
import {
  authAPI,
  LoginDataType,
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
    setIsAuth: (state, action: PayloadAction<UserType>) => {
      state.isAuth = true;
      state.user = action.payload;
    },
    setLogout: state => {
      state.user = {} as UserType;
      state.isAuth = false;
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

// thanks

// const loginToTheApp = createAsyncThunk(
//   'loginToTheApp',
//   (data: LoginDataType, thunkAPI) => {},
// );

export const loginToTheApp = (data: LoginDataType) => async (dispatch: Dispatch) => {
  dispatch(setStatus('loading'));
  try {
    const response = await authAPI.setAuth(data);
    if (response.status < 400) {
      dispatch(setIsAuth(response.data));
    }
    dispatch(setStatus('succeed'));
  } catch (err: any) {
    const error = err.response;
    if (error) {
      dispatch(setAuthError(error.data.error));
    } else {
      console.log(err.message);
    }
    dispatch(setStatus('failed'));
  }
};

export const getAuthMe =
  (data: {} = {}) =>
  async (dispatch: Dispatch) => {
    try {
      const response = await authAPI.getAuthMe(data);
      if (response.status < 400) {
        dispatch(setIsAuth(response.data));
      }
    } catch (err: any) {
      const error = err.response;
      if (error) {
        dispatch(setErrorApp(error.data.error));
      } else {
        console.log(err.message);
      }
    }
    dispatch(initializeApp(true));
  };

export const setNewPassword =
  (data: { password: string }) => async (dispatch: Dispatch, getState: any) => {
    const token = getState((state: { user: { token: any } }) => state.user.token);
    try {
      const response = await authAPI.setNewPassword({
        ...data,
        resetPasswordToken: token,
      });
      if (response.status < 400) {
        // eslint-disable-next-line no-alert
        alert(response.data);
      }
    } catch (err: any) {
      const error = err.response;
      if (error) {
        dispatch(setErrorApp(error.data.error));
      } else {
        console.log(err.message);
      }
    }
    dispatch(initializeApp(true));
  };

export const setRegistrationNewUser =
  (data: RegisterUserDataType) => async (dispatch: Dispatch) => {
    dispatch(setStatus('loading'));
    try {
      const response = await authAPI.setRegistration(data);
      if (response.status < 400) {
        dispatch(addNewUser('succeed'));
      }
      dispatch(setStatus('succeed'));
    } catch (err: any) {
      const error = err.response;
      if (error) {
        dispatch(setAuthError(error.data.error));
      } else {
        console.log(err.message);
      }
      dispatch(addNewUser('failed'));
      dispatch(setStatus('failed'));
    }
  };

export const setUpdatedUserData =
  (data: UpdateUserDataType) => async (dispatch: Dispatch) => {
    dispatch(setStatus('loading'));
    try {
      const response = await authAPI.setUpdatedUserData(data);
      if (response.status < 400) {
        dispatch(setUserData(response.data.updatedUser));
      }
      dispatch(setStatus('succeed'));
    } catch (err: any) {
      const error = err.response;
      if (error) {
        dispatch(setAuthError(error.data.error));
      } else {
        console.log(err.message);
      }
      dispatch(setStatus('failed'));
    }
  };

export const setLogOut =
  (data: {} = {}) =>
  async (dispatch: Dispatch) => {
    dispatch(setStatus('loading'));
    try {
      const response = await authAPI.setLogOut(data);
      if (response.status < 400) {
        dispatch(setLogout());
      }
      dispatch(setStatus('succeed'));
    } catch (err: any) {
      const error = err.response;
      if (error) {
        dispatch(setAuthError(error.data.error));
      } else {
        console.log(err.message);
      }
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

export type StatusType = 'idle' | 'loading' | 'succeed' | 'failed';

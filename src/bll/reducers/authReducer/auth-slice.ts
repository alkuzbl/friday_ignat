import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StatusType } from 'app/app-slice';
import {
  forgotPassword,
  getAuthUser,
  login,
  logout,
  registerUser,
  setNewPassword,
  updatedUserData,
} from 'bll/middlewares';
import { InitialStateAuthType } from 'bll/reducers/types';
import { UserType } from 'dal/auth-api';

const initialState: InitialStateAuthType = {
  user: {} as UserType,
  isAuth: false,
  error: null,
  status: 'idle',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthStatus: (state, action: PayloadAction<StatusType>) => {
      state.status = action.payload;
    },
    setLogout: state => {
      state.user = {} as UserType;
      state.isAuth = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.status = 'succeed';
      state.user = action.payload;
      state.isAuth = true;
      state.error = null;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
      state.isAuth = false;
    });

    builder.addCase(logout.fulfilled, state => {
      state.user = {} as UserType;
      state.isAuth = false;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.error = action.payload;
      state.isAuth = false;
    });

    builder.addCase(getAuthUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
    });
    builder.addCase(getAuthUser.rejected, (state, action) => {
      state.error = action.payload;
    });

    builder.addCase(registerUser.fulfilled, state => {
      state.status = 'succeed';
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.error = action.payload;
    });

    builder.addCase(forgotPassword.fulfilled, state => {
      state.status = 'succeed';
    });
    builder.addCase(forgotPassword.rejected, (state, action) => {
      state.error = action.payload;
      state.status = 'failed';
    });

    builder.addCase(setNewPassword.fulfilled, state => {
      state.status = 'succeed';
    });
    builder.addCase(setNewPassword.rejected, (state, action) => {
      state.error = action.payload;
      state.status = 'failed';
    });

    builder.addCase(updatedUserData.fulfilled, (state, action) => {
      state.user = action.payload;
      state.status = 'succeed';
    });
    builder.addCase(updatedUserData.rejected, (state, action) => {
      state.error = action.payload;
      state.status = 'failed';
    });
  },
});

// actions
export const { setAuthStatus, setLogout } = authSlice.actions;
// reducer
export const authReducer = authSlice.reducer;

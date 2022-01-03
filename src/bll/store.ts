import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { appReducer } from '../app/app-slice';

import { authReducer } from './login-slice';

const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
});

// types
export type AppStoreType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

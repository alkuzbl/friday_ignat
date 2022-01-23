import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from './auth-slice';
import { cardsReducer } from './card-slice';
import { packReducer } from './pack-slice';
import { userProfileReducer } from './userProfile-slice';

import { appReducer } from 'app/app-slice';

const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
  packs: packReducer,
  cards: cardsReducer,
  userProfile: userProfileReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
});

// types
export type AppStoreType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

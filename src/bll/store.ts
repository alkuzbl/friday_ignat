import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { appReducer } from 'app/app-slice';
import { authReducer } from 'bll/reducers/auth-slice';
import { cardsReducer } from 'bll/reducers/card-slice';
import { packReducer } from 'bll/reducers/pack-slice';
import { userProfileReducer } from 'bll/reducers/userProfile-slice';

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

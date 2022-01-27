import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { appReducer } from 'app/app-slice';
import { authReducer } from 'bll/reducers/authReducer/auth-slice';
import { cardsReducer } from 'bll/reducers/cardReducer/card-slice';
import { packReducer } from 'bll/reducers/packReducer/pack-slice';
import { userProfileReducer } from 'bll/reducers/userProfileReducer/userProfile-slice';

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

// style
export type AppStoreType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// странная типизация - но работает для thunk
export type AppAction = ReturnType<typeof store.dispatch>;

export const useAppDispatch = () => useDispatch<AppDispatch>();

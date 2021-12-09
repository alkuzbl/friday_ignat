import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { loginReducer } from './login-reducer';

export type RootStateType = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  login: loginReducer,
});

export type AppStoreType = typeof store;

export const store = createStore(rootReducer, applyMiddleware(thunk));

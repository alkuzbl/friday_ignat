import { Dispatch } from '@reduxjs/toolkit';

import { setErrorApp } from 'app/app-slice';
import { setLogout } from 'bll/reducers/authReducer/auth-slice';

export const getResponseError = (e: any) =>
  e.response ? e.response.data.error : `${e.message}, more details in the console`;

export const setResponseError = (errorResponse: any, dispatch: Dispatch) => {
  if (errorResponse.response.status === 401) {
    dispatch(setLogout());
  }
  const error = errorResponse.response
    ? errorResponse.response.data.error
    : `${errorResponse.message}, more details in the console`;
  dispatch(setErrorApp(error));
};

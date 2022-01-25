import { Dispatch } from '@reduxjs/toolkit';

import { setErrorApp } from 'app/app-slice';

export const getResponseError = (e: any) =>
  e.response ? e.response.data.error : `${e.message}, more details in the console`;
// не используется
export const setResponseError = (errorResponse: any, dispatch: Dispatch) => {
  const error = errorResponse.response
    ? errorResponse.response.data.error
    : `${errorResponse.message}, more details in the console`;
  dispatch(setErrorApp(error));
};

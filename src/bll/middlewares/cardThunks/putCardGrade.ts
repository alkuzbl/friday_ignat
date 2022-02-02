import { createAsyncThunk, ThunkDispatch } from '@reduxjs/toolkit';

import { setStatusApp } from 'app/app-slice';
import { setResponseError } from 'bll/middlewares/utils';
import { AppAction, AppStoreType } from 'bll/store';
import { cardAPI, RequestPayloadPutCardGrade } from 'dal/card-api';

export const putCardGrade = createAsyncThunk<
  void,
  RequestPayloadPutCardGrade,
  {
    dispatch: ThunkDispatch<AppStoreType, undefined, AppAction>;
    state: AppStoreType;
  }
>(
  'card/putCardGrade',

  async (data, { dispatch }) => {
    dispatch(setStatusApp('loading'));
    try {
      await cardAPI.putCardGrade(data);
      dispatch(setStatusApp('succeed'));
    } catch (e: any) {
      setResponseError(e, dispatch);
    }
  },
);

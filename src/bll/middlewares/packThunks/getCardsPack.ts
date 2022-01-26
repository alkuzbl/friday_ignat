import { createAsyncThunk } from '@reduxjs/toolkit';

import { setStatusApp } from 'app/app-slice';
import { setResponseError } from 'bll/middlewares/utils/getResponseError';
import { setPacks } from 'bll/reducers/packReducer/pack-slice';
import { packAPI, RequestGetPayloadPacksType } from 'dal/pack-api';

export const getCardsPack = createAsyncThunk(
  'pack/getCardsPack',
  async (data: RequestGetPayloadPacksType, { dispatch }) => {
    dispatch(setStatusApp('loading'));
    try {
      const res = await packAPI.getCardsPack(data);
      dispatch(setPacks(res.data));
      dispatch(setStatusApp('succeed'));
    } catch (e: any) {
      setResponseError(e, dispatch);
    }
  },
);

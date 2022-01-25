import { createAsyncThunk } from '@reduxjs/toolkit';

import { getResponseError } from 'bll/middlewares/utils';
import { setStatusCardsPack } from 'bll/reducers/pack-slice';
import { packAPI, RequestGetPayloadPacksType } from 'dal/pack-api';

export const getCardsPack = createAsyncThunk(
  'pack/getCardsPack',
  async (data: RequestGetPayloadPacksType, { dispatch, rejectWithValue }) => {
    dispatch(setStatusCardsPack('loading'));
    try {
      const res = await packAPI.getCardsPack(data);
      return res.data;
    } catch (e: any) {
      return rejectWithValue(getResponseError(e));
    }
  },
);

import { createAsyncThunk } from '@reduxjs/toolkit';

import { setInactiveModalWindow, setStatusApp } from 'app/app-slice';
import { ModalWindowPackType } from 'app/types';
import { setResponseError } from 'bll/middlewares/utils/setResponseError';
import { packAPI } from 'dal/pack-api';

export const updateCardsPack = createAsyncThunk(
  'pack/updateCardsPack',
  async (data: ModalWindowPackType, { dispatch, rejectWithValue }) => {
    dispatch(setStatusApp('loading'));
    try {
      const res = await packAPI.updatePack(data);
      dispatch(setStatusApp('succeed'));
      return res.data.updatedCardsPack;
    } catch (e: any) {
      setResponseError(e, dispatch);
      return rejectWithValue({});
    } finally {
      dispatch(setInactiveModalWindow());
    }
  },
);

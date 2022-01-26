import { createAsyncThunk } from '@reduxjs/toolkit';

import { ModalWindowPackType, setInactiveModalWindow, setStatusApp } from 'app/app-slice';
import { setResponseError } from 'bll/middlewares/utils/getResponseError';
import { updatePack } from 'bll/reducers/packReducer/pack-slice';
import { packAPI } from 'dal/pack-api';

export const updateCardsPack = createAsyncThunk(
  'pack/updateCardsPack',
  async (data: ModalWindowPackType, { dispatch }) => {
    dispatch(setStatusApp('loading'));
    try {
      const res = await packAPI.updatePack(data);
      dispatch(updatePack(res.data.updatedCardsPack));
      dispatch(setStatusApp('succeed'));
    } catch (e: any) {
      setResponseError(e, dispatch);
    }
    dispatch(setInactiveModalWindow());
  },
);

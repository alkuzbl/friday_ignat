import { createAsyncThunk } from '@reduxjs/toolkit';

import { ModalWindowPackType, setInactiveModalWindow } from 'app/app-slice';
import { getResponseError } from 'bll/middlewares/utils';
import {
  setErrorCardsPack,
  setStatusCardsPack,
  updatePack,
} from 'bll/reducers/pack-slice';
import { packAPI } from 'dal/pack-api';

export const updateCardsPack = createAsyncThunk(
  'pack/updateCardsPack',
  async (data: ModalWindowPackType, { dispatch }) => {
    dispatch(setStatusCardsPack('loading'));
    try {
      const res = await packAPI.updatePack(data);
      dispatch(updatePack(res.data.updatedCardsPack));
    } catch (e: any) {
      dispatch(setErrorCardsPack(getResponseError(e)));
    }
    dispatch(setInactiveModalWindow());
  },
);

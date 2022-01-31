import { createAsyncThunk, ThunkDispatch } from '@reduxjs/toolkit';

import { setInactiveModalWindow, setStatusApp } from 'app/app-slice';
import { getAllCards } from 'bll/middlewares/cardThunks/getAllCards';
import { setResponseError } from 'bll/middlewares/utils';
import { AppAction, AppStoreType } from 'bll/store';
import { cardAPI, RequestPayloadCreateCardType } from 'dal/card-api';

export const addNewCard = createAsyncThunk<
  {},
  RequestPayloadCreateCardType,
  {
    dispatch: ThunkDispatch<AppStoreType, undefined, AppAction>;
    state: AppStoreType;
  }
>('card/addNewCard', async (data, { dispatch }) => {
  dispatch(setStatusApp('loading'));
  try {
    await cardAPI.createCard(data);
    await dispatch(getAllCards({ cardsPack_id: data.cardsPack_id }));
    dispatch(setStatusApp('succeed'));
  } catch (e: any) {
    setResponseError(e, dispatch);
  } finally {
    dispatch(setInactiveModalWindow());
  }
});

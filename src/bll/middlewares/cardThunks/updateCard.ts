import { createAsyncThunk, ThunkDispatch } from '@reduxjs/toolkit';

import { setInactiveModalWindow, setStatusApp } from 'app/app-slice';
import { getAllCards } from 'bll/middlewares/cardThunks/getAllCards';
import { setResponseError } from 'bll/middlewares/utils';
import { AppAction, AppStoreType } from 'bll/store';
import { cardAPI, RequestPayloadUpdateCardType } from 'dal/card-api';

export const updateCard = createAsyncThunk<
  void,
  RequestPayloadUpdateCardType & { cardsPack_id: string },
  {
    dispatch: ThunkDispatch<AppStoreType, undefined, AppAction>;
    state: AppStoreType;
  }
>(
  'card/updateCard',

  async (data, { dispatch }) => {
    dispatch(setStatusApp('loading'));
    try {
      await cardAPI.updateCard({
        _id: data._id,
        question: data.question,
        answer: data.answer,
      });
      dispatch(getAllCards({ cardsPack_id: data.cardsPack_id }));
    } catch (e: any) {
      setResponseError(e, dispatch);
    }
    dispatch(setInactiveModalWindow());
  },
);

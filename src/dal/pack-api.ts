import { ModalWindowPackType } from '../app/app-slice';
import { CardPackType, DataPackType } from '../bll/pack-slice';

import { instance } from './instance-axios';

export const packAPI = {
  getCardsPack: (data: RequestGetPayloadPacksType) =>
    instance.get<DataPackType>(`cards/pack`, { params: data }),

  createNewPack: (data: RequestPayloadCreatePackType) =>
    instance.post<{ newCardsPack: CardPackType; error: string }>(`cards/pack`, {
      cardsPack: data,
    }),

  deletePack: (data: { id: string }) =>
    instance.delete<{ deletedCardsPack: CardPackType; error: string }>(`cards/pack`, {
      params: data,
    }),

  updatePack: (data: ModalWindowPackType) =>
    instance.put<{ updatedCardsPack: CardPackType; error: string }>(`cards/pack`, {
      cardsPack: data,
    }),
};

// types request
export type RequestGetPayloadPacksType = {
  packName?: string;
  min?: number;
  max?: number;
  sortPacks?: 0;
  page?: number;
  pageCount?: number;
  user_id?: string;
};

export type RequestPayloadCreatePackType = {
  name?: string;
  path?: string;
  grade?: number;
  shots?: number;
  rating?: number;
  deckCover?: string;
  private?: boolean;
  type?: string;
};
export type RequestPayloadUpdatePackType = {
  _id: string;
  name: string;
  rating?: number;
  private?: boolean;
};

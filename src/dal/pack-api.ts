import { instance } from './instance-axios';

import { ModalWindowPackType } from 'app/app-slice';
import { CardPackType, DataPackType } from 'bll/reducers/pack-slice';
import { SortValueType } from 'components/common/SortButton/SortButton/types';

export const packAPI = {
  getCardsPack: (data: RequestGetPayloadPacksType) =>
    instance.get<DataPackType>(`cards/pack`, { params: data }),
  createNewPack: (data: RequestPayloadCreatePackType) =>
    instance.post<{ newCardsPack: CardPackType; error: string }>(`cards/pack`, {
      cardsPack: data,
    }),

  deletePack: (data: { id: string | undefined }) =>
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
  sortPacks?: SortValueType;
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

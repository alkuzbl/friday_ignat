import { SortValueType } from 'components/SortButton/SortButton/types';
import { Nullabell } from 'types/Nullabel';

export type CardPackType = {
  _id: string;
  user_id: string;
  user_name: string;
  private: boolean;
  name: string;
  path: string;
  grade: number;
  shots: number;
  cardsCount: number;
  type: string;
  rating: number;
  created: string;
  updated: string;
  more_id: string;
};
export type DataPackType = {
  cardPacks: CardPackType[];
  page: number;
  pageCount: number;
  cardPacksTotalCount: number;
  minCardsCount: number | undefined;
  maxCardsCount: number | undefined;
  token: string | undefined;
  tokenDeathTime: number | undefined;
};
export type CardsPackDataForRequestType = {
  min?: number;
  max?: number;
  packName?: string | undefined;
  sortPacks?: SortValueType;
};
export type PackInitialStateType = {
  data: DataPackType;
  cardsPackDataForRequest: CardsPackDataForRequestType;
};

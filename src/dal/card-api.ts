import { CardsType, CardType } from '../bll/card-slice';

import { instance } from './instance-axios';

export const cardAPI = {
  getAllCards: (data: RequestPayloadGetCardType) =>
    instance.get<CardsType>(`cards/card`, { params: data }),

  createCard: (data: RequestPayloadCreateCardType) =>
    instance.post<ResponseCreateCardType>(`cards/card`, { card: data }),

  deleteCard: (data: { cardId: string }) =>
    instance.delete<{ deletedCard: CardType }>(`cards/card?id=${data.cardId}`),

  updateCard: (data: RequestPayloadUpdateCardType) =>
    instance.put<{ updatedCard: CardType }>(`cards/card`, { card: data }),
};

// types response
type ResponseCreateCardType = {
  newCard: CardType;
  token: string;
  tokenDeathTime: number;
  error: string;
};

// types request
export type RequestPayloadGetCardType = {
  cardsPack_id: string;
  page: number;
  pageCount: number;
  cardAnswer?: string;
  cardQuestion?: string;
  min?: number;
  max?: number;
  sortCards?: SortCardsType;
};

export type RequestPayloadCreateCardType = {
  cardsPack_id: string;
  question: string;
  answer: string;
  grade?: 0 | 1 | 2 | 3 | 4 | 5;
  shots?: number;
  rating?: number;
  answerImg?: string;
  questionImg?: string;
  questionVideo?: string;
  answerVideo?: string;
  type?: string;
};
export type RequestPayloadUpdateCardType = {
  card_id: string;
  question?: string;
  answer?: string;
};

export type SortCardsType = '0grade' | '1grade' | undefined;

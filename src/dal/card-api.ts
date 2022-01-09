import { instance } from './instance-axios';

export const cardAPI = {
  getAllCards: (data: RequestPayloadGetCardType) =>
    instance.get<ResponseCardType>(
      `cards/card?cardsPack_id=${data.cardsPack_id}&page=${data.page}&pageCount=${data.pageCount}`,
    ),

  createCard: (data: RequestPayloadCreateCardType) =>
    instance.post<ResponseCreateCardType>(`cards/card`, { card: data }),

  deleteCard: (cardId: string) =>
    instance.delete<{ deletedCard: CardType }>(`cards/card?id=${cardId}`),

  updateCard: (data: RequestPayloadUpdateCardType) =>
    instance.put<{ updatedCard: CardType }>(`cards/card`, { card: data }),
};

// types response
type ResponseCardType = {
  cards: CardType[];
  packUserId: string;
  page: number;
  pageCount: number;
  cardsTotalCount: number;
  minGrade: number;
  maxGrade: number;
  token: string;
  tokenDeathTime: number;
  error: string;
};
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
  sortCards?: string;
};

type RequestPayloadCreateCardType = {
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
type RequestPayloadUpdateCardType = {
  card_id: string;
  question?: string;
  answer?: string;
  comments?: string;
};

export type CardType = {
  _id: string;
  cardsPack_id: string;
  user_id: string;
  answer: string;
  question: string;
  grade: number;
  shots: number;
  comments: string;
  type: 'card';
  rating: number;
  more_id: string;
  created: string;
  updated: string;
  __v: number;
  answerImg?: string;
  answerVideo?: string;
  questionImg?: string;
  questionVideo?: string;
};

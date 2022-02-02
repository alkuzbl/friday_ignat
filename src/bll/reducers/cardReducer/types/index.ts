import { setPage } from 'bll/reducers/cardReducer/card-slice';
import { SortCardsType } from 'dal/card-api';

export type CardsActionsType = ReturnType<typeof setPage>;

export type CardType = {
  _id: string;
  cardsPack_id: string;
  user_id: string;
  answer: string;
  question: string;
  grade: number;
  shots: number;
  type: string;
  rating: number;
  more_id: string;
  created: string;
  updated: string;
  answerImg?: string;
  answerVideo?: string;
  questionImg?: string;
  questionVideo?: string;
};
export type CardsType = {
  cards: CardType[];
  packUserId: string;
  page: number;
  pageCount: number;
  cardsTotalCount: number;
  minGrade: number;
  maxGrade: number;
  token: string;
  tokenDeathTime: number;
  error: null | string;
};

export type CardsDataForRequestType = {
  sortCards?: SortCardsType;
  cardQuestion?: string | undefined;
  cardAnswer?: string | undefined;
};

export type CardsInitialStateType = {
  data: CardsType;
  cardsDataForRequest: CardsDataForRequestType;
};

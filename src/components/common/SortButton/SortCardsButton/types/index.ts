import { SortCardsType } from 'dal/card-api';

export type SortButtonPropsType = {
  onClick?: (value: SortCardsType) => void;
  defaultValue?: SortCardsType;
};

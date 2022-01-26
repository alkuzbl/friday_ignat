export type PaginationListItemPropsType = {
  currentValue: number | string | undefined;
  value: number;
  link: string;
  onClick: (value: number) => void;
};

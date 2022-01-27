export type SortValueType = '0updated' | '1updated' | undefined;
export type SortButtonPropsType = {
  onClick?: (value: SortValueType) => void;
  defaultValue?: SortValueType;
};

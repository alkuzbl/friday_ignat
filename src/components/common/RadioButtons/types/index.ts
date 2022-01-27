export type GradesType = {
  id: number;
  name: string;
};
export type RadioButtonsPropsType = {
  options?: GradesType[];
  onChangeOption?: (option: any) => void;
  value: GradesType | number;
};

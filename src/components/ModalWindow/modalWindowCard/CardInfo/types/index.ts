export type DataCardFormType = { question: string; answer: string };
export type CardInfoPropsType = {
  onSubmit: (data: DataCardFormType) => void;
  title: string;
};

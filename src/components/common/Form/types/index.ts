import React from 'react';

export type FormStateType = {
  [key: string]: string;
};

export type FormControlPropsType = {
  children?: React.ReactNode;
  onSubmitValue: FormStateType;
  resetValue?: (value: FormStateType) => void;
};

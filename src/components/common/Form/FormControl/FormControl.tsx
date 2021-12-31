import React, { FormEvent } from 'react';

type FormStateType = {
  [key: string]: string;
};

type FormControlPropsType = {
  children?: React.ReactNode;
  onSubmitValue: FormStateType;
  resetValue: (value: FormStateType) => void;
};

export const FormControl = (props: FormControlPropsType) => {
  const { children, onSubmitValue, resetValue } = props;

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(onSubmitValue);
    resetValue({});
  };
  return <form onSubmit={onSubmitHandler}>{children}</form>;
};

import React, { FC, FormEvent } from 'react';

import { FormControlPropsType } from './types';

export const Form: FC<FormControlPropsType> = props => {
  const { children, resetValue } = props;

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetValue && resetValue({});
  };
  return <form onSubmit={onSubmitHandler}>{children}</form>;
};

import React, { FC, FormEvent, memo } from 'react';

import { FormControlPropsType } from './types';

export const Form: FC<FormControlPropsType> = memo(props => {
  const { children, resetValue } = props;

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetValue && resetValue({});
  };
  return <form onSubmit={onSubmitHandler}>{children}</form>;
});

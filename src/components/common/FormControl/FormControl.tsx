import React, { FC } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { FormControlPropsType } from './types';

export const FormControl: FC<FormControlPropsType> = props => {
  const { children, onSubmit, defaultValues } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(defaultValues),
    mode: 'onTouched',
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, child =>
        child.props.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                register,
                errors,
                key: child.props.name,
              },
            })
          : child,
      )}
    </form>
  );
};

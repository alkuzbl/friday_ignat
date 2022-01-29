import React, { FC, memo } from 'react';

import styles from './style/InputF.module.scss';
import { InputFPropsType } from './types';

export const InputF: FC<InputFPropsType> = memo(props => {
  const {
    register,
    name,
    label,
    placeholder,
    className,
    errors,
    type,
    autoComplete,
    ...rest
  } = props;

  const stylesElement = `${styles.input} ${className || ''}`;
  const errorStyleInput = errors[name] ? { border: '1px solid red' } : {};

  return (
    <div className={stylesElement}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={styles.input__input}
        {...register(name)}
        {...rest}
        style={errorStyleInput}
        autoComplete={autoComplete}
      />
      <p className={styles.input__error}>{errors[name] && errors[name].message}</p>
    </div>
  );
});

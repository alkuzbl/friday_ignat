import React from 'react';

import styles from './InputF.module.scss';

type InputPropsType = {
  className?: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  name:
    | 'email'
    | 'password'
    | 'rememberMe'
    | 'confirmPassword'
    | 'name'
    | 'question'
    | 'answer';
  register?: any;
  errors?: any;
  type: 'checkbox' | 'text' | 'password' | 'email';
  style?: any;
  autoComplete?: 'on' | 'off' | 'username' | 'new-password' | 'current-password' | 'name';
};

export const InputF = (props: InputPropsType) => {
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
};

import React, {
  ChangeEvent,
  CSSProperties,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from 'react';

import styles from './Input.module.scss';

export type InputChangeEventType = ChangeEvent<HTMLInputElement>;
type DefaultType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type InputPropsType = DefaultType & {
  label?: string;
  classNameElement?: string;
  style?: CSSProperties;
  type:
    | 'text'
    | 'email'
    | 'password'
    | 'radio'
    | 'checkbox'
    | 'hidden'
    | 'button'
    | 'submit';
  placeholder?: string;
  name?: string;
  onChange?: (value: InputChangeEventType) => void;
  onEnter?: () => void;
  onKeyPress?: (e: DefaultType) => void;
  value?: string;
  onBlur?: () => void;
};

export const Input = (props: InputPropsType) => {
  const {
    classNameElement,
    label,
    type,
    placeholder,
    name,
    style,
    onChange,
    onEnter,
    onKeyPress,
    value,
    onBlur,
  } = props;

  const onKeyPressHandler = (e: DefaultType) => {
    onKeyPress && onKeyPress(e);
    onEnter && e.key === 'Enter' && onEnter();
  };

  const onChangeHandler = (e: InputChangeEventType) => {
    onChange && onChange(e);
  };
  const onBlurHandler = () => {
    onBlur && onBlur();
  };

  const stylesElement = `${styles.input} ${classNameElement || ''}`;

  return (
    <div className={styles.input__label}>
      <label>
        {label}
        <input
          className={stylesElement}
          style={style || {}}
          type={type}
          value={value || ''}
          placeholder={placeholder}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
          name={name || ''}
          onKeyPress={onKeyPressHandler}
        />
      </label>
    </div>
  );
};

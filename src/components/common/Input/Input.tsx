import React, {
  ChangeEvent,
  CSSProperties,
  DetailedHTMLProps,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';

import styles from './Input.module.scss';

export type InputChangeEventType = ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;
type DefaultType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

type InputPropsType = DefaultType & {
  title?: string;
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
    | 'submit'
    | 'textarea';
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
    title,
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

  const stylesElement =
    type === 'textarea'
      ? `${styles.textarea} ${classNameElement || ''}`
      : `${styles.input} ${classNameElement || ''}`;

  return (
    <div className={styles.input__label}>
      <label>
        {title}
        {type === 'textarea' ? (
          <textarea
            className={stylesElement}
            style={style || {}}
            placeholder={placeholder}
            onChange={onChangeHandler}
            value={value || ''}
            name={name || ''}
            onKeyPress={onKeyPressHandler}
          />
        ) : (
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
        )}
      </label>
    </div>
  );
};

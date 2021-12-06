import React, {
  ChangeEvent,
  CSSProperties,
  DetailedHTMLProps,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';

import classes from './Input.module.scss';

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
  value: string;
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
  } = props;

  const onKeyPressHandler = (e: DefaultType) => {
    onKeyPress && onKeyPress(e);
    onEnter && e.key === 'Enter' && onEnter();
  };

  const onChangeHandler = (e: InputChangeEventType) => {
    onChange && onChange(e);
  };

  const stylesElement =
    type === 'textarea'
      ? `${classes.textarea} ${classNameElement || ''}`
      : `${classes.input} ${classNameElement || ''}`;

  return (
    <div className={classes.inner}>
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
            name={name || ''}
            onKeyPress={onKeyPressHandler}
          />
        )}
      </label>
    </div>
  );
};

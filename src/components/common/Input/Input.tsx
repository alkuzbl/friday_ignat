import React, { FC, memo } from 'react';

import styles from './style/Input.module.scss';
import { DefaultType, InputChangeEventType, InputPropsType } from './types';

export const Input: FC<InputPropsType> = memo(props => {
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
});

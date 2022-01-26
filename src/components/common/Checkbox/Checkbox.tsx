import React, { ChangeEvent } from 'react';

import s from './style/Checkbox.module.css';
import { SuperCheckboxPropsType } from './types';

export const Checkbox: React.FC<SuperCheckboxPropsType> = props => {
  const { onChange, onChangeChecked, className, spanClassName, children, ...restProps } =
    props;

  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
    onChangeChecked && onChangeChecked(e.currentTarget.checked);
  };

  const finalInputClassName = `${s.checkbox} ${className || ''}`;

  return (
    <label>
      <input
        type="checkbox"
        onChange={onChangeCallback}
        className={finalInputClassName}
        checked={restProps.checked}
        {...restProps}
      />
      {children && <span className={s.spanClassName && spanClassName}>{children}</span>}
    </label>
  );
};

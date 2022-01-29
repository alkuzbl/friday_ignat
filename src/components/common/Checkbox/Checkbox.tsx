import React, { ChangeEvent, FC, memo } from 'react';

import { SuperCheckboxPropsType } from './types';

import style from 'components/common/Checkbox/style/Checkbox.module.scss';

export const Checkbox: FC<SuperCheckboxPropsType> = memo(props => {
  const { onChange, onChangeChecked, className, spanClassName, children, ...restProps } =
    props;

  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
    onChangeChecked && onChangeChecked(e.currentTarget.checked);
  };

  const finalInputClassName = `${style.checkbox} ${className || ''}`;

  return (
    <label>
      <input
        type="checkbox"
        onChange={onChangeCallback}
        className={finalInputClassName}
        checked={restProps.checked}
        {...restProps}
      />
      {children && (
        <span className={style.spanClassName && spanClassName}>{children}</span>
      )}
    </label>
  );
});

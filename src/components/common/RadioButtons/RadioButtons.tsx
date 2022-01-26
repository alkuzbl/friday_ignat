import React, { ChangeEvent } from 'react';

import { RadioButtonsPropsType } from './types';

// @ts-ignore
export const RadioButtons: React.FC<RadioButtonsPropsType> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type,
  name,
  options,
  value,
  onChange,
  onChangeOption,
  ...restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);

    onChangeOption && onChangeOption(e.currentTarget.value);
  };

  const mappedOptions: any[] = options
    ? options.map((o, i) => (
        <label key={`${name}-${o}`}>
          <input
            type="radio"
            name={name}
            checked={i + 1 === Number(value)}
            value={i + 1}
            onChange={onChangeCallback}
            {...restProps}
          />
          <span />
          {o}
        </label>
      ))
    : [];

  return <div style={{ display: 'flex', flexDirection: 'column' }}>{mappedOptions}</div>;
};

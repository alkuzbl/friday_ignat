import React, { ChangeEvent, FC, memo } from 'react';

import { RadioButtonsPropsType } from './types';

export const RadioButtons: FC<RadioButtonsPropsType> = memo(props => {
  const { options, value, onChangeOption } = props;

  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeOption && onChangeOption(e.currentTarget.value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '20px 0 40px' }}>
      {options &&
        options.map(option => (
          <label key={`${option.name}-${option.id}`} style={{ marginBottom: '10px' }}>
            <input
              type="radio"
              checked={option.id === +value}
              value={option.id}
              onChange={onChangeCallback}
            />
            <span>{option.name}</span>
          </label>
        ))}
    </div>
  );
});

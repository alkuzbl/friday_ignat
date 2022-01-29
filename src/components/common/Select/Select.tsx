import React, { ChangeEvent, FC, memo } from 'react';

import { SelectPropsType } from './types';

import styles from 'components/common/Pagination/style/Pagination.module.scss';

export const Select: FC<SelectPropsType> = memo(props => {
  const { value, onChange, defaultValue } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(+e.currentTarget.value);
  };

  return (
    <select
      className={styles.pagination__selectInput}
      onChange={onChangeHandler}
      defaultValue={defaultValue}
    >
      {value.map(opt => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
});

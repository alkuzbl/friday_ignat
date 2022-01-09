import React, { ChangeEvent } from 'react';

import styles from '../../../view/PacksListPage/Pagination/Pagination.module.scss';

type SelectPropsType = {
  value: string[] | number[];
  onChange: (value: number) => void;
  defaultValue: number;
};
export const Select = (props: SelectPropsType) => {
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
};

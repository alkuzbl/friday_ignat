import React from 'react';

import styles from '../../../view/PacksList/Pagination/Pagination.module.scss';

type SelectPropsType = {
  value: string[] | number[];
};
export const Select = (props: SelectPropsType) => {
  const { value } = props;
  return (
    <select className={styles.pagination__selectInput}>
      {value.map(opt => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
};

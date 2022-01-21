import React, { useState } from 'react';

import arrowIcon from '../../../assets/images/arrow.svg';

import styles from './SortButton.module.scss';

export type SortValueType = '0updated' | '1updated' | undefined;
type SortButtonPropsType = {
  onClick?: (value: SortValueType) => void;
  defaultValue?: SortValueType;
};
export const SortButton = (props: SortButtonPropsType) => {
  const { onClick, defaultValue = '0updated' } = props;
  const [sort, setSort] = useState<SortValueType>(defaultValue);
  // стоит поиграться с логикой касаемо запроса...
  const onClickSortHandler = () => {
    if (sort === '0updated') {
      setSort('1updated');
      onClick && onClick('1updated');
    } else {
      setSort('0updated');
      onClick && onClick('0updated');
    }
  };

  return (
    <button className={styles.button} type="button" onClick={onClickSortHandler}>
      <img
        src={arrowIcon}
        alt="arrow"
        style={sort === '1updated' ? { transform: 'rotate(180deg)' } : {}}
      />
    </button>
  );
};

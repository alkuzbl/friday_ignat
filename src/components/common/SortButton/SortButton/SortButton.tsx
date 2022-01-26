import React, { FC, useState } from 'react';

import styles from './style/SortButton.module.scss';
import { SortButtonPropsType, SortValueType } from './types';

import arrowIcon from 'assets/images/arrow.svg';

export const SortButton: FC<SortButtonPropsType> = props => {
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

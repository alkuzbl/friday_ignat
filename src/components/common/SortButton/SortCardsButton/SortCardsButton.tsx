import React, { FC, useState } from 'react';

import { SortButtonPropsType } from './types';

import arrowIcon from 'assets/images/arrow.svg';
import styles from 'components/common/SortButton/SortButton/style/SortButton.module.scss';
import { SortCardsType } from 'dal/card-api';

export const SortCardsButton: FC<SortButtonPropsType> = props => {
  const { onClick, defaultValue = '0grade' } = props;

  const [sort, setSort] = useState<SortCardsType>(defaultValue);

  const onClickSortHandler = () => {
    if (sort === '0grade') {
      setSort('1grade');
      onClick && onClick('1grade');
    } else {
      setSort('0grade');
      onClick && onClick('0grade');
    }
  };

  return (
    <button className={styles.button} type="button" onClick={onClickSortHandler}>
      <img
        src={arrowIcon}
        alt="arrow"
        style={sort === '1grade' ? { transform: 'rotate(180deg)' } : {}}
      />
    </button>
  );
};

import React, { useState } from 'react';

import arrowIcon from '../../../assets/images/arrow.svg';
import { SortCardsType } from '../../../dal/card-api';

import styles from './SortButton.module.scss';

type SortButtonPropsType = {
  onClick?: (value: SortCardsType) => void;
  defaultValue?: SortCardsType;
};
export const SortCardsButton = (props: SortButtonPropsType) => {
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

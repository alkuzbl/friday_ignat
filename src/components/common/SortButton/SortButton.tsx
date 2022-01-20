import React, { useState } from 'react';

import arrowIcon from '../../../assets/images/arrow.svg';

import styles from './SortButton.module.scss';

type SortButtonPropsType = {
  onClick?: (value: 0 | 1) => void;
  defaultValue?: 0 | 1;
};
export const SortButton = (props: SortButtonPropsType) => {
  const { onClick, defaultValue = 0 } = props;
  const [sort, setSort] = useState<0 | 1>(defaultValue);
  const onClickSortHandler = () => {
    if (sort === 0) {
      setSort(1);
      onClick && onClick(1);
    } else {
      setSort(0);
      onClick && onClick(0);
    }
  };
  return (
    <button className={styles.button} type="button" onClick={onClickSortHandler}>
      <img
        src={arrowIcon}
        alt="arrow"
        style={sort === 1 ? { transform: 'rotate(180deg)' } : {}}
      />
    </button>
  );
};

import React, { FC, useState } from 'react';

import arrowIcon from 'assets/images/arrow.svg';
import styles from 'components/SortButton/SortButton/style/SortButton.module.scss';
import {
  SortButtonPropsType,
  SortValueType,
} from 'components/SortButton/SortButton/types';

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

import React, { FC, memo } from 'react';

import { Link } from 'react-router-dom';

import { PaginationListItemPropsType } from 'components/common/Pagination/PaginationListItem/types';
import styles from 'components/common/Pagination/style/Pagination.module.scss';

export const PaginationListItem: FC<PaginationListItemPropsType> = memo(props => {
  const { value, currentValue = 1, link, onClick } = props;

  const activeStyle =
    value === +currentValue
      ? `${styles.pagination__listItem} ${styles.active}`
      : styles.pagination__listItem;

  const onClickHandler = () => onClick(value);

  return (
    <li className={activeStyle}>
      <Link to={`/${link}/${value}`} onClick={onClickHandler}>
        {value}
      </Link>
    </li>
  );
});

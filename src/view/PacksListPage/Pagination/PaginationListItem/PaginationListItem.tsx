import React from 'react';

import { Link } from 'react-router-dom';

import styles from '../Pagination.module.scss';

type PaginationListItemPropsType = {
  currentValue?: number | string | undefined;
  value: number;
  link: string;
};

export const PaginationListItem = (props: PaginationListItemPropsType) => {
  const { value, currentValue = 1, link } = props;
  const activeStyle =
    value === +currentValue
      ? `${styles.pagination__listItem} ${styles.active}`
      : styles.pagination__listItem;

  return (
    <li className={activeStyle}>
      <Link to={`/${link}/${value}`}>{value}</Link>
    </li>
  );
};

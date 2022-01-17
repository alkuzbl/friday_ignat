import React from 'react';

import { Link } from 'react-router-dom';

import styles from '../Pagination.module.scss';

type PaginationListItemPropsType = {
  currentValue: number | string | undefined;
  value: number;
  link: string;
  onClick: (value: number) => void;
};

export const PaginationListItem = (props: PaginationListItemPropsType) => {
  const { value, currentValue = 1, link, onClick } = props;
  const activeStyle =
    value === +currentValue
      ? `${styles.pagination__listItem} ${styles.active}`
      : styles.pagination__listItem;
  const onClickHandler = () => {
    onClick(value);
  };

  return (
    <li className={activeStyle}>
      <Link to={`/${link}/${value}`} onClick={onClickHandler}>
        {value}
      </Link>
    </li>
  );
};

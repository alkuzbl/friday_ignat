import React, { FC, useState } from 'react';

import { Link, useParams } from 'react-router-dom';

import { Select } from '../Select/Select';

import { PaginationListItem } from './PaginationListItem/PaginationListItem';
import styles from './style/Pagination.module.scss';
import { PaginationPropsType } from './types';

export const Pagination: FC<PaginationPropsType> = props => {
  const {
    totalCount,
    portionSize = 7,
    selectPage,
    setCountItem,
    pageCount = 4,
    optionValue,
    pathToUrl,
  } = props;
  const [portionNumber, setPortionNumber] = useState(1);

  const { currentPage } = useParams();
  // создание массива страниц
  const pagesCount = Math.ceil(totalCount / pageCount);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  // создание количества отрисованных страниц в pagination
  const portionCount = Math.ceil(pagesCount / portionSize);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  const setNextPage = portionSize * portionNumber + 1;
  const setPrevPage = (portionNumber - 1) * portionSize;

  // обработчики
  const onClickPrev = () => {
    setPortionNumber(portionNumber - 1);
    selectPage(setPrevPage);
  };

  const onClickNext = () => {
    setPortionNumber(portionNumber + 1);
    selectPage(setNextPage);
  };

  const selectPageHandler = (value: number) => {
    selectPage(value);
  };

  const setCountItemHandler = (value: number) => {
    setCountItem && setCountItem(value);
  };

  return (
    <div className={styles.pagination}>
      <div className={styles.pagination__box}>
        <button
          style={portionNumber <= 1 ? { pointerEvents: 'none' } : {}}
          disabled={portionNumber <= 1}
          type="button"
          className={styles.pagination__buttonPrev}
          onClick={onClickPrev}
        >
          <Link to={`/${pathToUrl}/${setPrevPage}`}>prev</Link>
        </button>
        <ul className={styles.pagination__list}>
          {pages
            .filter(
              page => page >= leftPortionPageNumber && page <= rightPortionPageNumber,
            )
            .map(page => (
              <PaginationListItem
                key={page}
                value={page}
                link={pathToUrl}
                currentValue={currentPage}
                onClick={selectPageHandler}
              />
            ))}
        </ul>
        {portionCount > portionNumber && (
          <div className={styles.pagination__countPages}>
            <p>. . .</p>
            <p>{pagesCount}</p>
          </div>
        )}
        <button
          style={portionCount <= portionNumber ? { pointerEvents: 'none' } : {}}
          disabled={portionCount <= portionNumber}
          type="button"
          className={styles.pagination__buttonNext}
          onClick={onClickNext}
        >
          <Link to={`/${pathToUrl}/${setNextPage}`}>next</Link>
        </button>
        <div className={styles.pagination__selectBox}>
          <span className={styles.pagination__select}>Show</span>
          <div className={styles.pagination__inputBox}>
            <Select
              value={optionValue || []}
              onChange={setCountItemHandler}
              defaultValue={pageCount}
            />
          </div>
          <span className={styles.pagination__select}>Cards per Page</span>
        </div>
      </div>
    </div>
  );
};

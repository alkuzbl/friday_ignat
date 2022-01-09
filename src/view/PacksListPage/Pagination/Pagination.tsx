import React, { useState } from 'react';

import { Link, useParams } from 'react-router-dom';

import { Select } from '../../../components/common/Select/Select';

import styles from './Pagination.module.scss';
import { PaginationListItem } from './PaginationListItem/PaginationListItem';

type PaginationPropsType = {
  totalCount: number;
  selectPage: (value: number, pageCount: number) => void;
  portionSize?: number;
  setPageCount?: (pageCount: number) => void;
  pageCount?: number;
  optionValue?: number[];
};
export const Pagination = (props: PaginationPropsType) => {
  const {
    totalCount,
    portionSize = 7,
    selectPage,
    setPageCount,
    pageCount = 4,
    optionValue,
  } = props;

  const { currentPage } = useParams();
  const [portionNumber, setPortionNumber] = useState(1);

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

  // const setNextPage = portionSize * portionNumber - (portionSize - 1);
  const setNextPage = portionSize * portionNumber + 1;
  const setPrevPage = (portionNumber - 1) * portionSize;

  // обработчики
  const onClickPrev = () => {
    setPortionNumber(portionNumber - 1);
    selectPage(setPrevPage, pageCount);
  };
  const onClickNext = () => {
    setPortionNumber(portionNumber + 1);
    selectPage(setNextPage, pageCount);
  };
  const selectPageHandler = (value: number) => {
    selectPage(value, pageCount);
  };
  const setPageCountForPacks = (value: number) => {
    setPageCount && setPageCount(value);
  };

  return (
    <div className={styles.pagination}>
      <div className={styles.pagination__box}>
        <button
          disabled={portionNumber <= 1}
          type="button"
          className={styles.pagination__buttonPrev}
          onClick={onClickPrev}
        >
          <Link to={`/profile/${setPrevPage}`}>prev</Link>
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
                link="profile"
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
          disabled={portionCount <= portionNumber}
          type="button"
          className={styles.pagination__buttonNext}
          onClick={onClickNext}
        >
          <Link to={`/profile/${setNextPage}`}>next</Link>
        </button>
        <div className={styles.pagination__selectBox}>
          <span className={styles.pagination__select}>Show</span>
          <div className={styles.pagination__inputBox}>
            <Select
              value={optionValue || []}
              onChange={setPageCountForPacks}
              defaultValue={pageCount}
            />
          </div>
          <span className={styles.pagination__select}>Cards per Page</span>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';

import { useParams } from 'react-router-dom';

import { Select } from '../../../components/common/Select/Select';

import styles from './Pagination.module.scss';
import { PaginationListItem } from './PaginationListItem/PaginationListItem';

export const Pagination = () => {
  const pagesCount = Math.ceil(222 / 8);
  const { currentPage } = useParams();

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  // логика не написана - просто захардкожино все
  const portionSize = 7;

  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);

  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;
  const setNextPage = portionSize * portionNumber - (portionSize - 1);
  const onClickPrev = () => {
    setPortionNumber(portionNumber - 1);
  };
  const onClickNext = () => {
    setPortionNumber(portionNumber + 1);
    console.log(setNextPage);
  };

  // const pagesJ = pages.filter(
  //   page => page >= leftPortionPageNumber && page <= rightPortionPageNumber,
  // );

  return (
    <div className={styles.pagination}>
      <div className={styles.pagination__box}>
        <button
          disabled={portionNumber <= 1}
          type="button"
          className={styles.pagination__buttonPrev}
          onClick={onClickPrev}
        >
          prev
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
          next
        </button>

        <div className={styles.pagination__selectBox}>
          <span className={styles.pagination__select}>Show</span>
          <div className={styles.pagination__inputBox}>
            {/* доделать локальный стейт */}
            <Select value={[1, 2, 3, 4, 5, 6, 7, 8]} />
          </div>
          <span className={styles.pagination__select}>Cards per Page</span>
        </div>
      </div>
    </div>
  );
};

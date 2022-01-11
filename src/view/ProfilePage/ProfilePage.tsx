import React, { useState } from 'react';

import { DoubleRange } from '../../components/common/DoubleRange/DoubleRange';
import { CommonPacksList } from '../PacksListPage/CommonPacksList/CommonPacksList';
import { Pagination } from '../PacksListPage/Pagination/Pagination';

import { Profile } from './Profile/Profile';
import styles from './ProfilePage.module.scss';

export const ProfilePage = () => {
  // потом положить в redux, в зависимости что искать нужно
  const [valueRangeSlider, setValueRangeSlider] = useState<number[]>([0, 100]);

  const selectPage = (value: number, pageCount: number) => {
    console.log(`${value}, ${pageCount}`);
  };

  const onChangeRange = (value: number[]) => setValueRangeSlider(value);
  const setPageCountForPacks = (value: number) => {
    console.log(value);
  };
  return (
    <div className={styles.profilePage}>
      <div className="container">
        <div className={styles.profilePage__wrapper}>
          <div className={styles.profilePage__profile}>
            <Profile />
            <div className={styles.profilePage__range}>
              <h4 className={styles.profilePage__rangeTitle}>Number of cards</h4>
              <DoubleRange onChangeRange={onChangeRange} value={valueRangeSlider} />
            </div>
          </div>
          <div className={styles.profilePage__packsList}>
            <CommonPacksList />
            <div className={styles.profilePage__pagination}>
              <Pagination
                totalCount={3434}
                selectPage={selectPage}
                setPageCount={setPageCountForPacks}
                pageCount={3}
                optionValue={[1, 2, 3, 4, 5, 6, 7, 8]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

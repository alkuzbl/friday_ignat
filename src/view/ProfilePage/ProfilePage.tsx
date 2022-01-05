import React, { useState } from 'react';

import { DoubleRange } from '../../components/common/DoubleRange/DoubleRange';
import { RedirectionIfNotAuthorized } from '../../hoc/RedirectionIfNotAuthorized';
import { CommonPacksList } from '../PacksListPage/CommonPacksList/CommonPacksList';
import { Pagination } from '../PacksListPage/Pagination/Pagination';

import { Profile } from './Profile/Profile';
import styles from './ProfilePage.module.scss';

const ProfilePage = () => {
  // потом положить в redux, в зависимости что искать нужно
  const [valueRangeSlider, setValueRangeSlider] = useState<number[]>([0, 100]);

  const onChangeRange = (value: number[]) => setValueRangeSlider(value);

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
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProfilePageContainer = RedirectionIfNotAuthorized(ProfilePage);

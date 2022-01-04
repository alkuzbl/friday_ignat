import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { AppStoreType } from '../../bll/store';
import { DoubleRange } from '../../components/common/DoubleRange/DoubleRange';
import { CommonPacksList } from '../PacksList/CommonPacksList/CommonPacksList';
import { Pagination } from '../PacksList/Pagination/Pagination';

import { Profile } from './Profile/Profile';
import styles from './ProfilePage.module.scss';

export const ProfilePage = () => {
  const isAuth = useSelector<AppStoreType, boolean>(state => state.auth.isAuth);
  // потом положить в redux, в зависимости что искать нужно
  const [valueRangeSlider, setValueRangeSlider] = useState<number[]>([0, 100]);

  const onChangeRange = (value: number[]) => setValueRangeSlider(value);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

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

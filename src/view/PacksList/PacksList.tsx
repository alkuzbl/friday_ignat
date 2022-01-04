import React from 'react';

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { AppStoreType } from '../../bll/store';

import { CommonPacksList } from './CommonPacksList/CommonPacksList';
import styles from './PacksList.module.scss';
import { Pagination } from './Pagination/Pagination';

export const PacksList = () => {
  const isAuth = useSelector<AppStoreType, boolean>(state => state.auth.isAuth);
  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return (
    <div className={styles.packsListPage}>
      <div className="container">
        {/* подумать как сделать один блок для профиля и листов */}
        <div className={styles.packsListPage__box}>
          <CommonPacksList />
          <div className={styles.packsListPage__pagination}>
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

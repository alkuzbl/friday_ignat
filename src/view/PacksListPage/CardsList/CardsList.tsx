import React from 'react';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { AppStoreType } from '../../../bll/store';
import styles from '../../ProfilePage/ProfilePage.module.scss';

import { PackageCardsAll } from './PackageCardsAll/PackageCardsAll';
import { PackageCardsMe } from './PackageCardsMe/PackageCardsMe';

export const CardsList = () => {
  const myId = useSelector<AppStoreType, string>(state => state.auth.user._id);
  const { userId } = useParams<'userId'>();
  return (
    <div className={styles.packsListPage}>
      <div className="container">
        <div className={styles.packsListPage__packsList}>
          {myId === userId ? <PackageCardsMe /> : <PackageCardsAll />}
          <div className={styles.packsListPage__pagination}>
            {/* <Pagination totalCount={1232} selectPage={() => {}} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

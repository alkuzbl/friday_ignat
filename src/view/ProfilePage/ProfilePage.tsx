import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { DataPackType, setPage, setPageCount } from '../../bll/pack-slice';
import { AppStoreType } from '../../bll/store';
import { DoubleRange } from '../../components/common/DoubleRange/DoubleRange';
import { Pagination } from '../../components/common/Pagination/Pagination';
import { RedirectionIfNotAuthorized } from '../../hoc/RedirectionIfNotAuthorized';
import { CardsPackList } from '../PacksListPage/CardsPackList/CardsPackList';

import { Profile } from './Profile/Profile';
import styles from './ProfilePage.module.scss';

const ProfilePage = () => {
  // потом положить в redux, в зависимости что искать нужно
  const [valueRangeSlider, setValueRangeSlider] = useState<number[]>([0, 100]);
  const { pageCount, cardPacksTotalCount } = useSelector<AppStoreType, DataPackType>(
    state => state.packs.data,
  );
  const dispatch = useDispatch();
  // выбор страницы - то-есть переход постраничный
  const selectPage = (page: number) => dispatch(setPage({ page }));
  // для выбора количества карточек (double-range)
  const onChangeRange = (value: number[]) => setValueRangeSlider(value);
  // выбор количества элементов на странице (select)
  const setPageCountForPacks = (pageCountValue: number) => {
    dispatch(setPageCount({ pageCount: pageCountValue }));
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
            <CardsPackList />
            <div className={styles.profilePage__pagination}>
              <Pagination
                totalCount={cardPacksTotalCount}
                selectPage={selectPage}
                setCountItem={setPageCountForPacks}
                pageCount={pageCount}
                pathToUrl="profile/user/pack-page"
                optionValue={[1, 2, 3, 4, 5, 6, 7, 8]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProfilePageContainer = RedirectionIfNotAuthorized(ProfilePage);

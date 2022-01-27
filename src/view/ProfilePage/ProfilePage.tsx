import React, { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Profile } from './Profile/Profile';
import styles from './style/ProfilePage.module.scss';

import {
  setCardsPackDataForRequest,
  setPage,
  setPageCount,
} from 'bll/reducers/packReducer/pack-slice';
import { DataPackType } from 'bll/reducers/packReducer/types';
import { AppStoreType } from 'bll/store';
import { Pagination, DoubleRange } from 'components';
import { RedirectionIfNotAuthorized } from 'hoc/RedirectionIfNotAuthorized';
import { CardsPackList } from 'view/PacksListPage';

const ProfilePage = () => {
  const dispatch = useDispatch();

  const { userId }: any = useParams<'userId'>();

  const { pageCount, cardPacksTotalCount, minCardsCount, maxCardsCount } = useSelector<
    AppStoreType,
    DataPackType
  >(state => state.packs.data);

  const selectPage = (page: number) => dispatch(setPage({ page }));

  const onChangeRange = useCallback((value: number[]) => {
    dispatch(setCardsPackDataForRequest({ min: value[0], max: value[1] }));
  }, []);

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
              <DoubleRange
                onAfterChange={onChangeRange}
                allowCross={false}
                min={minCardsCount}
                max={maxCardsCount}
              />
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
                pathToUrl={`profile/${userId}/pack-page`}
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

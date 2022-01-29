import React, { useCallback, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Profile } from './Profile/Profile';
import styles from './style/ProfilePage.module.scss';

import { StatusType } from 'app/types';
import { setPage, setPageCount } from 'bll/reducers/packReducer/pack-slice';
import { DataPackType } from 'bll/reducers/packReducer/types';
import { AppStoreType } from 'bll/store';
import { BackDrop, Pagination } from 'components';
import { DoubleRangeMUI } from 'components/common/DoubleRangeMUI/DoubleRangeMUI';
import { RedirectionIfNotAuthorized } from 'hoc/RedirectionIfNotAuthorized';
import { CardsPackList } from 'view/PacksListPage';

const ProfilePage = () => {
  const dispatch = useDispatch();

  const { userId }: any = useParams<'userId'>();

  const requestStatus = useSelector<AppStoreType, StatusType>(state => state.app.status);
  const { pageCount, cardPacksTotalCount, minCardsCount, maxCardsCount } = useSelector<
    AppStoreType,
    DataPackType
  >(state => state.packs.data);
  const [cardsCountForRequest, setCardsCountForRequest] = useState<{
    min: number;
    max: number;
  }>({ min: 0, max: 0 });

  const selectPage = (page: number) => dispatch(setPage({ page }));

  const onAfterChange = useCallback(
    (value: number[]) => {
      setCardsCountForRequest({ min: value[0], max: value[1] });
    },
    [cardsCountForRequest],
  );

  const setPageCountForPacks = (pageCountValue: number) => {
    dispatch(setPageCount({ pageCount: pageCountValue }));
  };

  return (
    <div className={styles.profilePage}>
      <BackDrop active={requestStatus === 'loading'} />
      <div className="container">
        <div className={styles.profilePage__wrapper}>
          <div className={styles.profilePage__profile}>
            <Profile />
            <div className={styles.profilePage__range}>
              <h4 className={styles.profilePage__rangeTitle}>Number of cards</h4>
              <DoubleRangeMUI
                min={minCardsCount}
                max={maxCardsCount}
                submitValueAfterChange={onAfterChange}
              />
            </div>
          </div>
          <div className={styles.profilePage__packsList}>
            <CardsPackList cardsCountForRequest={cardsCountForRequest} />
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

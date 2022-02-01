import React, { useCallback, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { setActiveModalWindow } from 'app/app-slice';
import { StatusType } from 'app/types';
import { getCardsPack } from 'bll/middlewares/packThunks/getCardsPack';
import { setPage, setPageCount } from 'bll/reducers/packReducer/pack-slice';
import {
  CardsPackDataForRequestType,
  DataPackType,
} from 'bll/reducers/packReducer/types';
import { AppStoreType } from 'bll/store';
import {
  BackDrop,
  Button,
  CardsPackTable,
  DoubleRangeMUI,
  Pagination,
  SearchForm,
} from 'components';
import { RedirectionIfNotAuthorized } from 'hoc/RedirectionIfNotAuthorized';
import { ButtonsBoxPacksList } from 'view';
import stylesPack from 'view/PacksListPage/CardsPackList/style/CardsPackList.module.scss';
import styles from 'view/ProfilePage/style/ProfilePage.module.scss';

const PacksListPage = () => {
  const dispatch = useDispatch();

  const { me } = useParams<'me'>();

  let userId = useSelector<AppStoreType, string | undefined>(
    state => state.auth.user._id,
  );
  const requestStatus = useSelector<AppStoreType, StatusType>(state => state.app.status);
  const { packName, sortPacks } = useSelector<AppStoreType, CardsPackDataForRequestType>(
    state => state.packs.cardsPackDataForRequest,
  );
  const { page, pageCount, cardPacksTotalCount, minCardsCount, maxCardsCount } =
    useSelector<AppStoreType, DataPackType>(state => state.packs.data);
  const [cardsCountForRequest, setCardsCountForRequest] = useState<{
    min: number;
    max: number;
  }>({ min: 0, max: 0 });

  const onAfterChange = useCallback(
    (value: number[]) => {
      setCardsCountForRequest({ min: value[0], max: value[1] });
    },
    [cardsCountForRequest],
  );

  if (me === 'all') {
    userId = undefined;
  }

  const selectPage = (pageValue: number) => dispatch(setPage({ page: pageValue }));

  const setPageCountForPacks = (pageCountValue: number) => {
    dispatch(setPageCount({ pageCount: pageCountValue }));
  };

  useEffect(() => {
    dispatch(
      getCardsPack({
        page,
        pageCount,
        packName,
        sortPacks,
        user_id: userId,
        ...cardsCountForRequest,
      }),
    );
  }, [pageCount, page, cardsCountForRequest, packName, sortPacks, userId]);

  const addNewPack = () =>
    dispatch(setActiveModalWindow({ name: 'create-pack', modalWindowData: {} }));

  return (
    <div className={styles.profilePage}>
      <BackDrop active={requestStatus === 'loading'} />
      <div className="container">
        <div className={styles.profilePage__wrapper}>
          <div className={styles.profilePage__profile}>
            <div className={styles.profile}>
              <ButtonsBoxPacksList />
            </div>
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
            <div className={stylesPack.packs}>
              <h3 className={stylesPack.packs__title}>Packs list</h3>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '20px',
                }}
              >
                <div style={{ width: '100%' }}>
                  <SearchForm />
                </div>

                <div
                  style={{
                    height: '35px',
                    maxWidth: '185px',
                    width: '100%',
                    marginLeft: '25px',
                  }}
                >
                  <Button
                    title="Add new pack"
                    type="button"
                    view="default"
                    onClick={addNewPack}
                  />
                </div>
              </div>
              <CardsPackTable />
            </div>
            <div className={styles.profilePage__pagination}>
              <Pagination
                totalCount={cardPacksTotalCount}
                selectPage={selectPage}
                setCountItem={setPageCountForPacks}
                pageCount={pageCount}
                pathToUrl="packs-list/cards-pack/all"
                optionValue={[1, 2, 3, 4, 5, 6, 7, 8]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const PacksListPageContainer = RedirectionIfNotAuthorized(PacksListPage);

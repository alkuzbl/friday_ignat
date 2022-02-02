import React, { useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { PackageCards } from './PackageCards';

import { StatusType } from 'app/types';
import { getAllCards } from 'bll/middlewares';
import { setPage, setPageCount } from 'bll/reducers/cardReducer/card-slice';
import { CardsDataForRequestType } from 'bll/reducers/cardReducer/types';
import { AppStoreType } from 'bll/store';
import { BackDrop, Pagination } from 'components';
import { RedirectionIfNotAuthorized } from 'hoc/RedirectionIfNotAuthorized';
import styles from 'view/ProfilePage/style/ProfilePage.module.scss';

const CardsList = () => {
  const dispatch = useDispatch();

  const { packId } = useParams<'packId'>();
  const { userId } = useParams<'userId'>();

  const requestStatus = useSelector<AppStoreType, StatusType>(state => state.app.status);
  const {
    cardsTotalCount,
    pageCount,
    page: currentPage,
  } = useSelector<
    AppStoreType,
    { cardsTotalCount: number; pageCount: number; page: number }
  >(state => state.cards.data);
  const { sortCards, cardQuestion, cardAnswer } = useSelector<
    AppStoreType,
    CardsDataForRequestType
  >(state => state.cards.cardsDataForRequest);

  useEffect(() => {
    dispatch(
      getAllCards({
        cardsPack_id: packId as string,
        page: currentPage,
        pageCount,
        sortCards,
        cardQuestion,
        cardAnswer,
      }),
    );
  }, [packId, currentPage, pageCount, sortCards, cardQuestion, cardAnswer]);

  const selectPage = useCallback(
    (page: number) => dispatch(setPage({ page })),
    [dispatch, currentPage],
  );

  const setPageCountForCards = useCallback(
    (pageCountValue: number) => {
      dispatch(setPageCount({ pageCount: pageCountValue }));
    },
    [dispatch, pageCount],
  );

  return (
    <div className={styles.packsListPage}>
      <BackDrop active={requestStatus === 'loading'} />
      <div className="container">
        <div className={styles.packsListPage__packsList}>
          <PackageCards />
        </div>
        <div className={styles.packsListPage__pagination}>
          {!cardsTotalCount ? (
            <div
              style={{
                display: 'inline-block',
                textAlign: 'center',
                width: '100%',
                paddingTop: '50px',
              }}
            >
              Add your first card
            </div>
          ) : (
            <Pagination
              totalCount={cardsTotalCount}
              selectPage={selectPage}
              pathToUrl={`packs-list/${userId}/pack/${packId}`}
              pageCount={pageCount}
              setCountItem={setPageCountForCards}
              optionValue={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export const CardsListContainer = RedirectionIfNotAuthorized(CardsList);

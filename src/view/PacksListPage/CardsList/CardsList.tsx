import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { PackageCards } from './PackageCards/PackageCards';

import { getAllCards, setPage, setPageCount } from 'bll/card-slice';
import { AppStoreType } from 'bll/store';
import { Pagination } from 'components';
import { SortCardsType } from 'dal/card-api';
import { RedirectionIfNotAuthorized } from 'hoc/RedirectionIfNotAuthorized';
import styles from 'view/ProfilePage/style/ProfilePage.module.scss';

const CardsList = () => {
  const cardsTotalCount = useSelector<AppStoreType, number>(
    state => state.cards.data.cardsTotalCount,
  );
  const pageCount = useSelector<AppStoreType, number>(
    state => state.cards.data.pageCount,
  );
  const currentPage = useSelector<AppStoreType, number>(state => state.cards.data.page);
  const sortCards = useSelector<AppStoreType, SortCardsType>(
    state => state.cards.cardsDataForRequest.sortCards,
  );
  const cardQuestion = useSelector<AppStoreType, string | undefined>(
    state => state.cards.cardsDataForRequest.cardQuestion,
  );
  const cardAnswer = useSelector<AppStoreType, string | undefined>(
    state => state.cards.cardsDataForRequest.cardAnswer,
  );

  const dispatch = useDispatch();

  const { packId } = useParams<'packId'>();
  const { userId } = useParams<'userId'>();

  const selectPage = (page: number) => dispatch(setPage({ page }));

  const setPageCountForCards = (pageCountValue: number) => {
    dispatch(setPageCount({ pageCount: pageCountValue }));
  };
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
  return (
    <div className={styles.packsListPage}>
      <div className="container">
        <div className={styles.packsListPage__packsList}>
          <PackageCards />
          <div className={styles.packsListPage__pagination}>
            <Pagination
              totalCount={cardsTotalCount}
              selectPage={selectPage}
              pathToUrl={`packs-list/${userId}/pack/${packId}`}
              pageCount={pageCount}
              setCountItem={setPageCountForCards}
              optionValue={[1, 2, 3, 4, 5]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const CardsListContainer = RedirectionIfNotAuthorized(CardsList);

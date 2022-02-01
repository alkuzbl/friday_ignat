import React, { memo, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getCardsPack } from 'bll/middlewares/packThunks/getCardsPack';
import {
  CardsPackDataForRequestType,
  DataPackType,
} from 'bll/reducers/packReducer/types';
import { AppStoreType } from 'bll/store';
import { CardsPackTable } from 'components/CardsPackTable';
import { SearchForm } from 'components/SearchForm/SeachForm/SearchForm';
import styles from 'view/PacksListPage/CardsPackList/style/CardsPackList.module.scss';
import { CardsPackListPropsType } from 'view/PacksListPage/CardsPackList/types';

export const CardsPackList = memo<CardsPackListPropsType>(({ cardsCountForRequest }) => {
  const dispatch = useDispatch();

  const { page, pageCount } = useSelector<AppStoreType, DataPackType>(
    state => state.packs.data,
  );
  const { packName, sortPacks } = useSelector<AppStoreType, CardsPackDataForRequestType>(
    state => state.packs.cardsPackDataForRequest,
  );

  const { userId } = useParams<'userId'>();

  useEffect(() => {
    dispatch(
      getCardsPack({
        page,
        pageCount,
        user_id: userId,
        ...cardsCountForRequest,
        packName,
        sortPacks,
      }),
    );
  }, [pageCount, page, userId, packName, sortPacks, cardsCountForRequest]);

  return (
    <div className={styles.packs}>
      <h3 className={styles.packs__title}>My packs list</h3>
      <SearchForm />
      <CardsPackTable />
    </div>
  );
});

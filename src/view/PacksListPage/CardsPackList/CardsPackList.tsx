import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getCardsPack } from 'bll/middlewares/packThunks/getCardsPack';
import { clearCardsPackDataForRequest } from 'bll/reducers/packReducer/pack-slice';
import {
  CardsPackDataForRequestType,
  DataPackType,
} from 'bll/reducers/packReducer/types';
import { AppStoreType } from 'bll/store';
import { CardsPackTable } from 'components/common/CardsPackTable';
import { SearchForm } from 'components/common/SearchForm/SeachForm/SearchForm';
import styles from 'view/PacksListPage/CardsPackList/style/CardsPackList.module.scss';

export const CardsPackList = () => {
  const { page, pageCount } = useSelector<AppStoreType, DataPackType>(
    state => state.packs.data,
  );
  const { min, max, packName, sortPacks } = useSelector<
    AppStoreType,
    CardsPackDataForRequestType
  >(state => state.packs.cardsPackDataForRequest);

  const dispatch = useDispatch();

  const { userId } = useParams<'userId'>();

  useEffect(() => {
    dispatch(
      getCardsPack({
        page,
        pageCount,
        user_id: userId,
        min,
        max,
        packName,
        sortPacks,
      }),
    );
    return () => {
      dispatch(clearCardsPackDataForRequest());
    };
  }, [pageCount, page, userId, min, max, packName, sortPacks]);

  return (
    <div className={styles.packs}>
      <h3 className={styles.packs__title}>My packs list</h3>
      <SearchForm />
      <CardsPackTable />
    </div>
  );
};

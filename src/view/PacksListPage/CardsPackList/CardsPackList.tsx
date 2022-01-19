import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  CardsPackDataForRequestType,
  DataPackType,
  getCardsPack,
} from '../../../bll/pack-slice';
import { AppStoreType } from '../../../bll/store';
import { CardsPackTable } from '../../../components/common/CardsPackTable/CardsPackTable';
import { SearchForm } from '../../../components/common/SearchForm/SearchForm';

import styles from './CardsPackList.module.scss';

export const CardsPackList = () => {
  const { page, pageCount } = useSelector<AppStoreType, DataPackType>(
    state => state.packs.data,
  );
  const { min, max } = useSelector<AppStoreType, CardsPackDataForRequestType>(
    state => state.packs.cardsPackDataForRequest,
  );

  const { userId } = useParams<'userId'>();
  const dispatch = useDispatch();

  useEffect(() => {
    // лучше делать локальный стейт под range
    // dispatch(setCardsCount({ min: minCardsCount, max: maxCardsCount }));
    dispatch(
      getCardsPack({
        page,
        pageCount,
        user_id: userId,
        min,
        max,
      }),
    );
  }, [pageCount, page, userId, min, max]);

  return (
    <div className={styles.packs}>
      <h3 className={styles.packs__title}>My packs list</h3>
      <SearchForm />
      <CardsPackTable />
    </div>
  );
};

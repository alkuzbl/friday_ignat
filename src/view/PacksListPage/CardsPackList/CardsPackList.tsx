import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getCardsPack } from '../../../bll/pack-slice';
import { AppStoreType } from '../../../bll/store';
import { CardsPackTable } from '../../../components/common/CardsPackTable/CardsPackTable';
import { SearchForm } from '../../../components/common/SearchForm/SearchForm';

import styles from './CardsPackList.module.scss';

export const CardsPackList = () => {
  const { page, pageCount } = useSelector<
    AppStoreType,
    { pageCount: number; page: number }
  >(state => state.packs.data);

  const { userId } = useParams<'userId'>();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCardsPack({ page, pageCount, user_id: userId }));
  }, [pageCount, page, userId]);

  return (
    <div className={styles.packs}>
      <h3 className={styles.packs__title}>My packs list</h3>
      <SearchForm />
      <CardsPackTable />
    </div>
  );
};

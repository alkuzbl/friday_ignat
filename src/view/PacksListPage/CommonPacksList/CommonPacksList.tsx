import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { CardPackType, getCardsPack } from '../../../bll/pack-slice';
import { AppStoreType } from '../../../bll/store';
import { PacksListSearch } from '../PacksListSearch/PacksListSearch';

import styles from './CommonPacksList.module.scss';
import { PackListItem } from './PackListItem/PackListItem';

export const CommonPacksList = () => {
  const packsList = useSelector<AppStoreType, CardPackType[]>(
    state => state.packs.cardPacks,
  );
  const myId = useSelector<AppStoreType, string>(state => state.auth.user._id);
  const pageCount = useSelector<AppStoreType, number>(state => state.packs.pageCount);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCardsPack({ page: 1, pageCount }));
  }, [pageCount]);
  return (
    <div className={styles.packs}>
      <h3 className={styles.packs__title}>My packs list</h3>
      <PacksListSearch />
      <div className={styles.packs__box}>
        <div className={styles.packs__itemsTitle}>
          <h4 className={styles.packs__itemTitle}>Name</h4>
          <h4 className={styles.packs__itemTitle}>Cards</h4>
          <div className={styles.packs__itemSort}>
            <h4 className={styles.packs__itemTitle}>Last Updated</h4>
            <span>X</span>
          </div>
          <h4 className={styles.packs__itemTitle}>Created by</h4>
          <h4 className={styles.packs__itemTitle}>Actions</h4>
        </div>
        {packsList.map((p, i) => (
          <PackListItem
            key={p._id}
            packId={p._id}
            index={i}
            packName={p.name}
            userName={p.user_name}
            count={p.cardsCount}
            myCard={myId === p.user_id}
            date={p.updated.slice(0, 10).split('-').reverse().join('.')}
          />
        ))}
      </div>
    </div>
  );
};

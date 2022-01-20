import React from 'react';

import { useSelector } from 'react-redux';

import { CardPackType } from '../../../bll/pack-slice';
import { AppStoreType } from '../../../bll/store';
import styles from '../../../view/PacksListPage/CardsPackList/CardsPackList.module.scss';
import { PackListItem } from '../../../view/PacksListPage/CardsPackList/PackListItem/PackListItem';
import { SortButton } from '../SortButton/SortButton';

export const CardsPackTable = () => {
  const myId = useSelector<AppStoreType, string>(state => state.auth.user._id);
  const cardsPack = useSelector<AppStoreType, CardPackType[]>(
    state => state.packs.data.cardPacks,
  );

  return (
    <div className={styles.packs__box}>
      <div className={styles.packs__itemsTitle}>
        <h4 className={styles.packs__itemTitle}>Name</h4>
        <h4 className={styles.packs__itemTitle}>Cards</h4>
        <div className={styles.packs__itemSort}>
          <h4 className={styles.packs__itemTitle}>Last Updated</h4>
          <SortButton />
        </div>
        <h4 className={styles.packs__itemTitle}>Created by</h4>
        <h4 className={styles.packs__itemTitle}>Actions</h4>
      </div>
      {cardsPack.map(p => (
        <PackListItem
          key={p._id}
          packId={p._id}
          index={1}
          packName={p.name}
          userName={p.user_name}
          count={p.cardsCount}
          userId={p.user_id}
          myCard={p.user_id === myId}
          date={p.updated.slice(0, 10).split('-').reverse().join('.')}
        />
      ))}
    </div>
  );
};

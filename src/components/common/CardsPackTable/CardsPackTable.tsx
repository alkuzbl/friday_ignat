import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { CardPackType, setCardsPackDataForRequest } from 'bll/reducers/pack-slice';
import { AppStoreType } from 'bll/store';
import { SortButton } from 'components/common/SortButton';
import { SortValueType } from 'components/common/SortButton/SortButton/types';
import { PackListItem } from 'view/PacksListPage/CardsPackList/PackListItem/PackListItem';
import styles from 'view/PacksListPage/CardsPackList/style/CardsPackList.module.scss';

export const CardsPackTable = () => {
  const myId = useSelector<AppStoreType, string>(state => state.auth.user._id);
  const cardsPack = useSelector<AppStoreType, CardPackType[]>(
    state => state.packs.data.cardPacks,
  );

  const dispatch = useDispatch();
  const sortByDate = (value: SortValueType) => {
    dispatch(setCardsPackDataForRequest({ sortPacks: value }));
  };

  return (
    <div className={styles.packs__box}>
      <div className={styles.packs__itemsTitle}>
        <h4 className={styles.packs__itemTitle}>Name</h4>
        <h4 className={styles.packs__itemTitle}>Cards</h4>
        <div className={styles.packs__itemSort}>
          <h4 className={styles.packs__itemTitle}>Last Updated</h4>
          <SortButton onClick={sortByDate} />
        </div>
        <h4 className={styles.packs__itemTitle}>Created by</h4>
        <h4 className={styles.packs__itemTitle}>Actions</h4>
      </div>
      {cardsPack.map(pack => (
        <PackListItem
          key={pack._id}
          packId={pack._id}
          index={1}
          packName={pack.name}
          userName={pack.user_name}
          count={pack.cardsCount}
          userId={pack.user_id}
          myCard={pack.user_id === myId}
          date={pack.updated.slice(0, 10).split('-').reverse().join('.')}
        />
      ))}
    </div>
  );
};

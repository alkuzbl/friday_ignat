import React from 'react';

import styles from '../../../view/PacksListPage/CardsPackList/CardsPackList.module.scss';
import { PackListItem } from '../../../view/PacksListPage/CardsPackList/PackListItem/PackListItem';

export const CardsPackTable = () => (
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
    <PackListItem
      key={1}
      packId="1"
      index={1}
      packName="packName"
      userName="userName"
      count={30}
      myCard
      date="10.01.2021"
    />

    <PackListItem
      key={2}
      packId="2"
      index={2}
      packName="packName"
      userName="userName"
      count={30}
      myCard
      date="10.01.2021"
    />
    <PackListItem
      key={3}
      packId="3"
      index={3}
      packName="packName"
      userName="userName"
      count={30}
      myCard
      date="10.01.2021"
    />
    <PackListItem
      key={4}
      packId="4"
      index={4}
      packName="packName"
      userName="userName"
      count={30}
      myCard
      date="10.01.2021"
    />
  </div>
);

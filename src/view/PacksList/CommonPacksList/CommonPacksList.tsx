import React from 'react';

import { PackListItem } from '../PackListItem/PackListItem';
import { PacksListSearch } from '../PacksListSearch/PacksListSearch';

import styles from './CommonPacksList.module.scss';

export const CommonPacksList = () => (
  <div className={styles.packsList}>
    <h3 className={styles.packsList__title}>My packs list</h3>
    <PacksListSearch />
    <div className={styles.packsList__box}>
      <div className={styles.packsList__itemsTitle}>
        <h4 className={styles.packsList__itemTitle}>Name</h4>
        <h4 className={styles.packsList__itemTitle}>Cards</h4>
        <div className={styles.packsList__itemSort}>
          <h4 className={styles.packsList__itemTitle}>Last Updated</h4>
          <span>X</span>
        </div>
        <h4 className={styles.packsList__itemTitle}>Created by</h4>
        <h4 className={styles.packsList__itemTitle}>Actions</h4>
      </div>
      <PackListItem
        // id={1}
        index={1}
        packName="PackName"
        userName="Ivanm Ivanov"
        count={4}
        date="18.03.2021"
        myCard
      />
      <PackListItem
        // id={1}
        index={2}
        packName="PackName"
        userName="Ivan Kozlov"
        count={112}
        date="12.03.2021"
        myCard
      />
      <PackListItem
        // id={1}
        index={3}
        packName="PackName"
        userName="Ivan Markov"
        count={44}
        date="28.05.2021"
        myCard
      />
      <PackListItem
        // id={1}
        index={4}
        packName="PackName"
        userName="Ivan Markov"
        count={44}
        date="28.05.2021"
        myCard
      />
      <PackListItem
        // id={1}
        index={5}
        packName="PackName"
        userName="Ivan Markov"
        count={44}
        date="28.05.2021"
        myCard
      />
      <PackListItem
        // id={1}
        index={6}
        packName="PackName"
        userName="Ivan Markov"
        count={44}
        date="28.05.2021"
        myCard
      />
      <PackListItem
        // id={1}
        index={7}
        packName="PackName"
        userName="Ivan Markov"
        count={44}
        date="28.05.2021"
        myCard
      />
    </div>
  </div>
);

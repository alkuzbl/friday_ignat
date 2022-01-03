import React from 'react';

import styles from '../../ProfilePage/ProfilePage.module.scss';

import { ActionButton } from './ActionButton/ActionButton';
import { ActionEditButtons } from './ActionEditButtons/ActionButtons';

type PackListItemPropsType = {
  userName: string;
  index: number;
  // id: number;
  date: string;
  packName: string;
  count: number;
  myCard: boolean;
};
export const PackListItem = (props: PackListItemPropsType) => {
  const { userName, date, packName, count, index, myCard } = props;

  const styleItem =
    index % 2 === 0 ? styles.packsList__item : `${styles.packsList__item} ${styles.dark}`;

  return (
    <div className={styleItem}>
      <p className={styles.packsList__itemContent}>{packName}</p>
      <p className={styles.packsList__itemContent}>{count}</p>
      <p className={styles.packsList__itemContent}>{date}</p>
      <p className={styles.packsList__itemContent}>{userName}</p>
      {myCard ? <ActionEditButtons /> : <ActionButton />}
    </div>
  );
};

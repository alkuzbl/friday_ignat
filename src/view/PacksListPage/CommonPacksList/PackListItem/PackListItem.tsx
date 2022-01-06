import React from 'react';

import { Link } from 'react-router-dom';

import styles from '../CommonPacksList.module.scss';

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
  // нужна логика
  const packId = '1';
  const styleItem =
    index % 2 === 0 ? styles.packs__item : `${styles.packs__item} ${styles.dark}`;

  return (
    <div className={styleItem}>
      <p className={styles.packs__itemContent}>
        <Link to={`/packs-list/${packId}`}>{packName}</Link>
      </p>
      <p className={styles.packs__itemContent}>{count}</p>
      <p className={styles.packs__itemContent}>{date}</p>
      <p className={styles.packs__itemContent}>{userName}</p>
      {myCard ? <ActionEditButtons /> : <ActionButton />}
    </div>
  );
};

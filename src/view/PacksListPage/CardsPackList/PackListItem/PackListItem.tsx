import React from 'react';

import { Link } from 'react-router-dom';

import styles from '../CardsPackList.module.scss';

import { ActionButton } from './ActionButton/ActionButton';
import { ActionEditButtons } from './ActionEditButtons/ActionButtons';

type PackListItemPropsType = {
  userName: string;
  index: number;
  packId: string;
  date: string;
  packName: string;
  count: number;
  myCard: boolean;
  userId: string;
};
export const PackListItem = (props: PackListItemPropsType) => {
  const { userName, date, packName, count, index, myCard, packId, userId } = props;

  const styleItem =
    index % 2 === 0 ? styles.packs__item : `${styles.packs__item} ${styles.dark}`;
  return (
    <div className={styleItem}>
      <p className={styles.packs__itemContent}>
        <Link to={`/packs-list/cards-pack/${packId}`}>{packName}</Link>
      </p>
      <p className={styles.packs__itemContent}>{count}</p>
      <p className={styles.packs__itemContent}>{date}</p>
      <p className={styles.packs__itemContent}>
        <Link to={`/profile/${userId}/pack-page/1`}>{userName}</Link>
      </p>
      {myCard ? (
        <ActionEditButtons packId={packId} packName={packName} />
      ) : (
        <ActionButton />
      )}
    </div>
  );
};

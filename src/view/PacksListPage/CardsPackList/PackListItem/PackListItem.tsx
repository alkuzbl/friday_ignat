import React, { FC } from 'react';

import { Link } from 'react-router-dom';

import { ActionButton, ActionEditButtons } from 'components';
import { PackListItemPropsType } from 'view/PacksListPage/CardsPackList/PackListItem/types';
import styles from 'view/PacksListPage/CardsPackList/style/CardsPackList.module.scss';

export const PackListItem: FC<PackListItemPropsType> = props => {
  const { userName, date, packName, count, index, myCard, packId, userId } = props;

  const styleItem =
    index % 2 === 0 ? styles.packs__item : `${styles.packs__item} ${styles.dark}`;

  return (
    <div className={styleItem}>
      <p className={styles.packs__itemContent}>
        <Link to={`/packs-list/${userId}/pack/${packId}/1`}>{packName}</Link>
      </p>
      <p className={styles.packs__itemContent}>{count}</p>
      <p className={styles.packs__itemContent}>{date}</p>
      <p className={styles.packs__itemContent}>
        <Link to={`/profile/${userId}/pack-page/1`}>{userName}</Link>
      </p>
      {myCard ? (
        <ActionEditButtons packId={packId} packName={packName} />
      ) : (
        <ActionButton packId={packId} packName={packName} />
      )}
    </div>
  );
};

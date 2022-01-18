import React from 'react';

import { Grade } from '../../../../../components/common/Grade/Grade';
import styles from '../../../CardsPackList/CardsPackList.module.scss';

type PackItemForAllPropsType = {
  question: string;
  answer: string;
  date: string;
  rating: number;
  index: number;
};
export const PackageItemForAll = (props: PackItemForAllPropsType) => {
  const { question, answer, date, rating, index } = props;

  const styleItem =
    index % 2 === 0
      ? `${styles.packs__item} ${styles.packCardsAll__item}`
      : `${styles.packs__item} ${styles.packCardsAll__item} ${styles.dark}`;

  return (
    <div className={styleItem}>
      <p className={styles.packs__itemContent}>{question}</p>
      <p className={styles.packs__itemContent}>{answer}</p>
      <p className={styles.packs__itemContent}>{date}</p>
      <div className={styles.packs__itemContent}>
        <Grade score={rating} />
      </div>
    </div>
  );
};

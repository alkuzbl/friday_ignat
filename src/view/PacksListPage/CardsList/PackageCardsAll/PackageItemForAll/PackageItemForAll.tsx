import React from 'react';

import { Grade } from '../../../../../components/common/Grade/Grade';
import styles from '../../../CardsPackList/CardsPackList.module.scss';

type PackItemForAllPropsType = {
  columnOne: string;
  columnTwo: string;
  columnThree: string;
  columnFour: number;
  index: number;
};
export const PackageItemForAll = (props: PackItemForAllPropsType) => {
  const { columnOne, columnTwo, columnThree, columnFour, index } = props;

  const styleItem =
    index % 2 === 0
      ? `${styles.packs__item} ${styles.packCardsAll__item}`
      : `${styles.packs__item} ${styles.packCardsAll__item} ${styles.dark}`;

  return (
    <div className={styleItem}>
      <p className={styles.packs__itemContent}>{columnOne}</p>
      <p className={styles.packs__itemContent}>{columnTwo}</p>
      <p className={styles.packs__itemContent}>{columnThree}</p>
      <div className={styles.packs__itemContent}>
        <Grade score={columnFour} />
      </div>
    </div>
  );
};

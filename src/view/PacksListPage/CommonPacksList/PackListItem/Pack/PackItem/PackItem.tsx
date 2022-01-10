import React from 'react';

import { Button } from '../../../../../../components/common/Button';
import styles from '../../../CommonPacksList.module.scss';
import { Grade } from '../Grade/Grade';

type PackItemPropsType = {
  columnOne: string;
  columnTwo: string;
  columnThree: string;
  columnFour: number;
  index: number;
};
export const PackItem = (props: PackItemPropsType) => {
  const { columnOne, columnTwo, columnThree, columnFour, index } = props;

  const onClickDelete = () => {};
  const onClickEdit = () => {};

  const styleItem =
    index % 2 === 0
      ? `${styles.packs__item} ${styles.pack__item}`
      : `${styles.packs__item} ${styles.pack__item} ${styles.dark}`;

  return (
    <div className={styleItem}>
      <p className={styles.packs__itemContent}>{columnOne}</p>
      <p className={styles.packs__itemContent}>{columnTwo}</p>
      <p className={styles.packs__itemContent}>{columnThree}</p>
      <div className={styles.packs__itemContent}>
        <Grade score={columnFour} />
      </div>

      <div className={`${styles.packs__itemButtons} ${styles.pack__itemButtons}`}>
        <Button
          title="Delete"
          type="button"
          view="delete-for-packsList"
          onClick={onClickDelete}
        />
        <Button
          title="Edit"
          type="button"
          view="default-for-packsList"
          onClick={onClickEdit}
        />
      </div>
    </div>
  );
};

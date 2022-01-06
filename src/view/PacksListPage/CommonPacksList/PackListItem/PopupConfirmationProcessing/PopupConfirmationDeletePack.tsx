import React from 'react';

import { Button } from '../../../../../components/common/Button';

import styles from './PopupConfirmationProcessing.module.scss';

export const PopupConfirmationDeletePack = () => {
  const packName = 'Bla cla';
  return (
    <div className={styles.popup}>
      <div className={styles.popup__titleBox}>
        <h3 className={styles.popup__title}>Delete Pack</h3>
        <Button title="X" type="button" view="popup-close" />
      </div>
      <p className={styles.popup__content}>
        Do you really want to remove <span>Pack Name - {packName}</span> <br />
        All cards will be excluded from this course.
      </p>
      <div className={styles.popup__buttonsInner}>
        <Button title="Cancel" type="button" view="default-for-pack-name" />
        <Button title="Delete" type="button" view="delete-for-pack-name" />
      </div>
    </div>
  );
};

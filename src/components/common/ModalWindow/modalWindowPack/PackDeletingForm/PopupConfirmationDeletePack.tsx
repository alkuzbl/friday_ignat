import React from 'react';

import { Button } from '../../../Button';

import styles from './PopupConfirmationProcessing.module.scss';

export const PackDeletingForm = () => {
  const deletePack = () => {
    console.log('delete');
  };
  const cancel = () => {
    console.log('cancel');
  };
  const onClickDiv = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };
  return (
    <div role="presentation" className={styles.popup} onClick={onClickDiv}>
      <div className={styles.popup__titleBox}>
        <h3 className={styles.popup__title}>Delete Pack</h3>
        <Button title="X" type="button" view="popup-close" onClick={cancel} />
      </div>
      <p className={styles.popup__content}>
        Do you really want to remove <span>Pack Name - PAckName</span> <br />
        All cards will be excluded from this course.
      </p>
      <div className={styles.popup__buttonsInner}>
        <Button
          title="Cancel"
          type="button"
          view="default-for-pack-name"
          onClick={cancel}
        />
        <Button
          title="Delete"
          type="button"
          view="delete-for-pack-name"
          onClick={deletePack}
        />
      </div>
    </div>
  );
};
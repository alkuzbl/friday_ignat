import React from 'react';

import { Button } from '../../../../../components/common/Button';

import styles from './PopupConfirmationProcessing.module.scss';

export const PopupConfirmationDeletePack = () => {
  const deletePack = () => {
    console.log('delete');
  };
  const cancel = () => {
    console.log('cancel');
  };
  // ниже в компоненте нужно потом добавить правило в еслинт чтобы он не ругался или как то по другому реализовать логику строка 20
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      className={styles.popup}
      onClick={e => {
        e.stopPropagation();
      }}
    >
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

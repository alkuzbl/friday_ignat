import React from 'react';

import { Button } from '../../../../../components/common/Button';
import { Input } from '../../../../../components/common/Input/Input';

import styles from './PopupConfirmationProcessing.module.scss';

export const PopupConfirmationAddNewPack = () => (
  <div className={styles.popup}>
    <div className={styles.popup__titleBox}>
      <h3 className={styles.popup__title}>Add new pack</h3>
      <Button title="X" type="button" view="popup-close" />
    </div>
    <div className={styles.popup__input}>
      <Input type="text" title="Name pack" />
    </div>
    <div className={styles.popup__buttonsInner}>
      <Button title="Cancel" type="button" view="default-for-pack-name" />
      <Button title="Save" type="button" view="default-for-pack-name" />
    </div>
  </div>
);

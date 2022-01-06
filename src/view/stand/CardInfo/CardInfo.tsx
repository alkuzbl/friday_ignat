import React from 'react';

import { Button } from '../../../components/common/Button';
import { Input } from '../../../components/common/Input/Input';

import styles from './CardInfo.module.scss';

export const CardInfo = () => (
  <div className={styles.popup}>
    <h3 className={styles.popup__title}>Card info</h3>
    <div className={styles.popup__inner}>
      <div className={styles.popup__input}>
        <Input type="text" title="Question" />
      </div>
      <div className={styles.popup__input}>
        <Input type="text" title="Answer" />
      </div>
    </div>

    <div className={styles.popup__buttonsInner}>
      <Button title="Cancel" type="button" view="default-for-pack-name" />
      <Button title="Save" type="button" view="default-for-pack-name" />
    </div>
  </div>
);

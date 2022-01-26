import React from 'react';

import { Button } from 'components/common/Button';
import styles from 'view/ProfilePage/style/ProfilePage.module.scss';

export const ActionButton = () => {
  const onClickLearn = () => {};
  return (
    <div className={styles.packsList__itemButtons}>
      <Button
        title="Learn"
        type="button"
        view="default-for-packsList"
        onClick={onClickLearn}
      />
    </div>
  );
};

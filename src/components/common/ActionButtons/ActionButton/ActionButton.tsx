import React from 'react';

import styles from '../../../../view/ProfilePage/ProfilePage.module.scss';
import { Button } from '../../Button';

// type ActionButtonPropsType = {
//   id?: number;
// };
export const ActionButton = () => {
  // const { id } = props;

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

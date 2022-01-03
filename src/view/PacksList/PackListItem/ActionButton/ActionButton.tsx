import React from 'react';

import { Button } from '../../../../components/common/Button';
import styles from '../../../ProfilePage/ProfilePage.module.scss';

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

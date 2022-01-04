import React from 'react';

import { Button } from '../../../../components/common/Button';
import styles from '../../CommonPacksList/CommonPacksList.module.scss';

// type ActionEditButtonsPropsType = {
//   id?: number;
// };
export const ActionEditButtons = () => {
  // const { id } = props;
  const onClickDelete = () => {};
  const onClickEdit = () => {};
  const onClickLern = () => {};
  return (
    <div className={styles.packsList__itemButtons}>
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
      <Button
        title="Learn"
        type="button"
        view="default-for-packsList"
        onClick={onClickLern}
      />
    </div>
  );
};

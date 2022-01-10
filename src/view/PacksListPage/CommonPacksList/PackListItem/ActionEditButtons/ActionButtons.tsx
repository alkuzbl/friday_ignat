import React from 'react';

import { useDispatch } from 'react-redux';

import { setActiveModalCardsPack } from '../../../../../bll/pack-slice';
import { Button } from '../../../../../components/common/Button';
import styles from '../../CommonPacksList.module.scss';

type ActionEditButtonsPropsType = {
  packId: string;
  packName: string;
};
export const ActionEditButtons = (props: ActionEditButtonsPropsType) => {
  const { packName, packId } = props;
  const dispatch = useDispatch();
  const onClickDelete = () => {
    dispatch(setActiveModalCardsPack({ status: true, packName, packId }));
  };
  const onClickEdit = () => {};
  const onClickLearn = () => {};
  return (
    <div className={styles.packs__itemButtons}>
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
        onClick={onClickLearn}
      />
    </div>
  );
};

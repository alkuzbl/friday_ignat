import React from 'react';

import { useDispatch } from 'react-redux';

import { setActiveModalWindow } from '../../../../app/app-slice';
import styles from '../../../../view/PacksListPage/CardsPackList/CardsPackList.module.scss';
import { Button } from '../../Button';

type ActionEditButtonsPropsType = {
  packId: string;
  packName: string;
};
export const ActionEditButtons = (props: ActionEditButtonsPropsType) => {
  const { packName, packId } = props;
  const dispatch = useDispatch();
  const onClickDelete = () => {
    dispatch(
      setActiveModalWindow({
        name: 'delete-pack',
        modalWindowData: { _id: packId, name: packName },
      }),
    );
  };
  const onClickEdit = () => {
    dispatch(
      setActiveModalWindow({
        name: 'edit-pack-name',
        modalWindowData: { _id: packId, name: packName },
      }),
    );
  };
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
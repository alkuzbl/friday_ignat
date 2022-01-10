import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { deleteCardsPack, setActiveModalCardsPack } from '../../../../../bll/pack-slice';
import { AppStoreType } from '../../../../../bll/store';
import { Button } from '../../../../../components/common/Button';

import styles from './PopupConfirmationProcessing.module.scss';

export const PopupConfirmationDeletePack = () => {
  const { packName, packId } = useSelector<
    AppStoreType,
    { packName: string; packId: string }
  >(state => state.packs.modalWindow);
  const dispatch = useDispatch();
  const deletePack = () => {
    dispatch(deleteCardsPack(packId));
  };
  const cancel = () => {
    dispatch(setActiveModalCardsPack({ status: false, packName: '', packId: '' }));
  };
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      className={styles.popup}
      onClick={e => {
        e.stopPropagation();
      }}
      onKeyDown={event => {
        console.log(event.keyCode);
      }}
    >
      <div className={styles.popup__titleBox}>
        <h3 className={styles.popup__title}>Delete Pack</h3>
        <Button title="X" type="button" view="popup-close" onClick={cancel} />
      </div>
      <p className={styles.popup__content}>
        Do you really want to remove <span>Pack Name - {packName}</span> <br />
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

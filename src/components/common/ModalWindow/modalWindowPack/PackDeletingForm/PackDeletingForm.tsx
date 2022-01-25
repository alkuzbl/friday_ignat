import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { ModalWindowPackType, setInactiveModalWindow } from 'app/app-slice';
import { deleteCardsPack } from 'bll/reducers/pack-slice';
import { AppStoreType } from 'bll/store';
import { Button } from 'components/common/Button';
import styles from 'components/common/ModalWindow/modalWindowPack/PackDeletingForm/style/PackDeletingForm.module.scss';

export const PackDeletingForm = () => {
  const { name } = useSelector<AppStoreType, ModalWindowPackType>(
    state => state.app.modalWindow.modalWindowData,
  );

  const dispatch = useDispatch();

  const deletePack = () => dispatch(deleteCardsPack());

  const cancel = () => dispatch(setInactiveModalWindow());

  const onClickDiv = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  return (
    <div role="presentation" className={styles.popup} onClick={onClickDiv}>
      <div className={styles.popup__titleBox}>
        <h3 className={styles.popup__title}>Delete Pack</h3>
        <Button title="X" type="button" view="popup-close" onClick={cancel} />
      </div>
      <p className={styles.popup__content}>
        Do you really want to remove <span>Pack Name - {name}</span> <br />
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

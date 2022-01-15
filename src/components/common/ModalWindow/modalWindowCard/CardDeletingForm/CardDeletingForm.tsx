import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  ModalWindowCardType,
  setInactiveModalWindow,
} from '../../../../../app/app-slice';
import { AppStoreType } from '../../../../../bll/store';
import { Button } from '../../../Button';
import styles from '../../modalWindowPack/PackDeletingForm/PopupConfirmationProcessing.module.scss';

export const CardDeletingForm = () => {
  const { question, cardId } = useSelector<AppStoreType, ModalWindowCardType>(
    state => state.app.modalWindow.modalWindowData,
  );

  const dispatch = useDispatch();
  const deleteCard = () => {
    console.log(cardId);
  };
  const cancel = () => dispatch(setInactiveModalWindow());
  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
    e.stopPropagation();

  return (
    <div className={styles.popup} onClick={onClick} role="presentation">
      <div className={styles.popup__titleBox}>
        <h3 className={styles.popup__title}>Delete Pack</h3>
        <Button title="X" type="button" view="popup-close" onClick={cancel} />
      </div>
      <p className={styles.popup__content}>
        Do you really want to remove <span>Card Question- {question}</span>
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
          onClick={deleteCard}
        />
      </div>
    </div>
  );
};

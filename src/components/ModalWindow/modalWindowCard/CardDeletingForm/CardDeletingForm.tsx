import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setInactiveModalWindow } from 'app/app-slice';
import { ModalWindowCardType } from 'app/types';
import { deleteCard } from 'bll/middlewares';
import { AppStoreType } from 'bll/store';
import { Button } from 'components/common/Button';
import styles from 'components/ModalWindow/modalWindowPack/PackDeletingForm/style/PackDeletingForm.module.scss';

export const CardDeletingForm = () => {
  const { question, cardId, cardsPackId } = useSelector<
    AppStoreType,
    ModalWindowCardType
  >(state => state.app.modalWindow.modalWindowData);

  const dispatch = useDispatch();
  const onDeleteCardClick = () => {
    dispatch(
      deleteCard({ cardsPackId: cardsPackId as string, cardId: cardId as string }),
    );
  };
  const cancel = () => dispatch(setInactiveModalWindow());
  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
    e.stopPropagation();

  return (
    <div className={styles.popup} onClick={onClick} role="presentation">
      <div className={styles.popup__titleBox}>
        <h3 className={styles.popup__title}>Delete Card</h3>
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
          onClick={onDeleteCardClick}
        />
      </div>
    </div>
  );
};

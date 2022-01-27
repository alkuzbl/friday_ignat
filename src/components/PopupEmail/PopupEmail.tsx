import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setInactiveModalWindow } from 'app/app-slice';
import { ModalWindowCardType } from 'app/types';
import icon from 'assets/images/iconEmail.svg';
import { AppStoreType } from 'bll/store';
import { AuthBox } from 'components/common/AuthBox/AuthBox';
import styles from 'components/PopupEmail/style/PopupEmail.module.scss';

export const PopupEmail = () => {
  const dispatch = useDispatch();
  const onClickDiv = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
    e.stopPropagation();
  const { email } = useSelector<AppStoreType, ModalWindowCardType>(
    state => state.app.modalWindow.modalWindowData,
  );
  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(setInactiveModalWindow());
    }, 4000);
    return () => {
      clearTimeout(id);
    };
  });

  return (
    <div className={styles.popup} role="presentation" onClick={onClickDiv}>
      <AuthBox>
        <div className={styles.popup__image}>
          <img className={styles.popup__img} src={icon} alt="email" />
        </div>
        <h3 className={styles.popup__subtitle}>Check Email</h3>
        <div>
          <p className={styles.popup__info}>
            We’ve sent an Email with instructions to <span>{email}</span>
          </p>
        </div>
      </AuthBox>
    </div>
  );
};

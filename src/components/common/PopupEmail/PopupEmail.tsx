import React from 'react';

import icon from '../../../assets/images/iconEmail.svg';
import { AuthBox } from '../AuthBox/AuthBox';

import styles from './PopupEmail.module.scss';

export const PopupEmail = () => (
  <div className={styles.popup}>
    <AuthBox>
      <div className={styles.popup__image}>
        <img className={styles.popup__img} src={icon} alt="email" />
      </div>
      <h3 className={styles.popup__subtitle}>Check Email</h3>
      <div>
        <p className={styles.popup__info}>
          We’ve sent an Email with instructions to example@mail.com
        </p>
      </div>
    </AuthBox>
  </div>
);

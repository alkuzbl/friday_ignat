import React from 'react';

import { useSelector } from 'react-redux';

import { AppStoreType } from '../../bll/store';
import logo from '../../issets/images/logo.png';

import styles from './Header.module.scss';
import { NavBar } from './Navbar/NavBar';

export const Header = () => {
  const isAuth = useSelector<AppStoreType, boolean>(state => state.auth.isAuth);

  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.header__wrapper}>
          <div className={styles.logo}>
            <img className={styles.logo__icon} src={logo} alt="it-incubator" />
          </div>
          {isAuth && <NavBar />}
        </div>
      </div>
    </div>
  );
};

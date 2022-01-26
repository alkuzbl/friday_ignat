import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import logo from '../../assets/images/logo.png';

import { NavBar } from './Navbar/NavBar';

import { logout } from 'bll/middlewares/authThunks/logout';
import { AppStoreType } from 'bll/store';
import { Button } from 'components';
import styles from 'view/Header/style/Header.module.scss';

export const Header = () => {
  const isAuth = useSelector<AppStoreType, boolean>(state => state.auth.isAuth);
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logout({}));
  };
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.header__wrapper}>
          <div className={styles.logo}>
            <img className={styles.logo__icon} src={logo} alt="it-incubator" />
          </div>
          {isAuth && (
            <>
              <NavBar />
              <Button
                title="logout"
                type="button"
                onClick={logOut}
                view="default-for-packsList"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

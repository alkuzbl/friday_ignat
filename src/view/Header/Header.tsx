import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../../bll/auth-slice';
import { AppStoreType } from '../../bll/store';
import { Button } from '../../components/common/Button';
import logo from '../../issets/images/logo.png';

import styles from './Header.module.scss';
import { NavBar } from './Navbar/NavBar';

export const Header = () => {
  const isAuth = useSelector<AppStoreType, boolean>(state => state.auth.isAuth);
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logout());
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

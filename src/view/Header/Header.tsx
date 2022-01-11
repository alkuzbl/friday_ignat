import React, { useState } from 'react';

import { Button } from '../../components/common/Button';
import logo from '../../issets/images/logo.png';

import styles from './Header.module.scss';
import { NavBar } from './Navbar/NavBar';

export const Header = () => {
  // заглушка, данные должны приходить с redux
  const [isAuth] = useState<boolean>(true);
  const logOut = () => {
    console.log('header');
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

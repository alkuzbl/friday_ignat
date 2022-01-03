import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';

import { setLogOut } from '../../../bll/login-slice';
import { AppStoreType } from '../../../bll/store';

import styles from './Profile.module.scss';
import { UserImageBox } from './UserImageBox/UserImageBox';

export const Profile = () => {
  const isAuth = useSelector<AppStoreType, boolean>(state => state.auth.isAuth);
  const { avatar, name } = useSelector<AppStoreType, any>(state => state.auth.user);

  const dispatch = useDispatch();
  const logOut = () => dispatch(setLogOut());

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return (
    <div className={styles.profile}>
      <div className={styles.profile__image}>
        <UserImageBox icon={avatar} />
      </div>
      <h4 className={styles.profile__name}>{name}</h4>
      <p className={styles.profile__job}>Front-end developer</p>
      <Link className={styles.profile__button} to="/profile/edit">
        Edit profile
      </Link>
      <button type="button" onClick={logOut}>
        logout
      </button>
    </div>
  );
};

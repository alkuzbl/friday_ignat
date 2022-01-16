import React from 'react';

import { Link, Navigate } from 'react-router-dom';

import avatar from '../../../assets/images/user_icon.svg';

import styles from './Profile.module.scss';
import { UserImageBox } from './UserImageBox/UserImageBox';

export const Profile = () => {
  const isAuth = true;

  // реализовать логику показа кнопки редактирования своего профайла
  const isMyProfile = true;

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return (
    <div className={styles.profile}>
      <div className={styles.profile__image}>
        <UserImageBox icon={avatar} />
      </div>
      <h4 className={styles.profile__name}>Vasya</h4>
      <p className={styles.profile__job}>Front-end developer</p>
      <div className={styles.profile__editButton}>
        {isMyProfile && (
          <Link className={styles.profile__button} to="/profile/user/edit">
            Edit profile
          </Link>
        )}
      </div>
    </div>
  );
};

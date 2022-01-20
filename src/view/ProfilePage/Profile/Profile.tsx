import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useParams } from 'react-router-dom';

import { AppStoreType } from '../../../bll/store';
import { getUserProfile, UserProfileType } from '../../../bll/userProfile-slice';

import styles from './Profile.module.scss';
import { UserImageBox } from './UserImageBox/UserImageBox';

export const Profile = () => {
  const isAuth = useSelector<AppStoreType, boolean>(state => state.auth.isAuth);
  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  const myId = useSelector<AppStoreType, string>(state => state.auth.user._id);
  const { avatar, name } = useSelector<AppStoreType, UserProfileType>(
    state => state.userProfile.data.user,
  );
  const { userId } = useParams<'userId'>();
  const dispatch = useDispatch();
  // реализовать логику показа кнопки редактирования своего профайла

  useEffect(() => {
    // заглушка в виде setTimeout чтобы одновременно не шли запросы
    // eslint-disable-next-line no-undef
    let idTimer: NodeJS.Timeout;
    if (userId) {
      idTimer = setTimeout(() => {
        dispatch(getUserProfile({ id: userId }));
      }, 1000);
    }
    return () => clearTimeout(idTimer);
  }, [userId]);

  return (
    <div className={styles.profile}>
      <div className={styles.profile__image}>
        <UserImageBox icon={avatar} />
      </div>
      <h4 className={styles.profile__name}>{name}</h4>
      <p className={styles.profile__job}>Front-end developer</p>
      <div className={styles.profile__editButton}>
        {myId === userId && (
          <Link className={styles.profile__button} to="/profile/user/edit">
            Edit profile
          </Link>
        )}
      </div>
    </div>
  );
};

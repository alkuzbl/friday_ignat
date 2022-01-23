import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { UserImageBox } from './UserImageBox/UserImageBox';

import { AppStoreType } from 'bll/store';
import { getUserProfile, UserProfileType } from 'bll/userProfile-slice';
import styles from 'view/ProfilePage/Profile/style/Profile.module.scss';

const DELAY_TIME = 1000;

export const Profile = () => {
  const myId = useSelector<AppStoreType, string>(state => state.auth.user._id);
  const { avatar, name } = useSelector<AppStoreType, UserProfileType>(
    state => state.userProfile.data.user,
  );

  const dispatch = useDispatch();

  const { userId } = useParams<'userId'>();

  useEffect(() => {
    // заглушка в виде setTimeout чтобы одновременно не шли запросы
    // eslint-disable-next-line no-undef
    let idTimer: NodeJS.Timeout;
    if (userId) {
      idTimer = setTimeout(() => {
        dispatch(getUserProfile({ id: userId }));
      }, DELAY_TIME);
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

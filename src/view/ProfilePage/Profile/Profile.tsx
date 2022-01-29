import React from 'react';

import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { UserImageBox } from './UserImageBox/UserImageBox';

import { UserProfileType } from 'bll/reducers/types';
import { AppStoreType } from 'bll/store';
import styles from 'view/ProfilePage/Profile/style/Profile.module.scss';

export const Profile = () => {
  const { userId } = useParams<'userId'>();

  const myId = useSelector<AppStoreType, string>(state => state.auth.user._id);
  const { avatar, name } = useSelector<AppStoreType, UserProfileType>(
    state => state.userProfile.data.user,
  );

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

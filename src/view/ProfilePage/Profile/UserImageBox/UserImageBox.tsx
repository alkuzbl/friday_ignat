import React, { FC } from 'react';

import userIcon from 'assets/images/user_icon.svg';
import styles from 'view/ProfilePage/Profile/UserImageBox/style/UserImageBox.module.scss';
import { UserImageBoxPropsType } from 'view/ProfilePage/Profile/UserImageBox/types';

export const UserImageBox: FC<UserImageBoxPropsType> = props => {
  const { icon } = props;

  return (
    <div className={styles.imageBox}>
      <img src={icon || userIcon} alt="user" />
    </div>
  );
};

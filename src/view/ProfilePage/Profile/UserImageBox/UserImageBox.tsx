import React from 'react';

import userIcon from '../../../../issets/images/user_icon.svg';

import styles from './UserImageBox.module.scss';

type UserImageBoxPropsType = {
  icon?: string;
};
export const UserImageBox = (props: UserImageBoxPropsType) => {
  const { icon } = props;

  return (
    <div className={styles.imageBox}>
      <img src={icon || userIcon} alt="user" />
    </div>
  );
};

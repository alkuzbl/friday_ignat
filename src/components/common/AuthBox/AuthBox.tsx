import React, { FC, memo } from 'react';

import styles from './style/AuthBox.module.scss';
import { AuthBoxPropsType } from './types';

export const AuthBox: FC<AuthBoxPropsType> = memo(props => {
  const { children } = props;
  return (
    <div className={styles.authBox}>
      <h1 className={styles.authBox__title}>It-incubator</h1>
      {children}
    </div>
  );
});

import React, { useState } from 'react';

import { AuthBox } from '../../components/common/AuthBox/AuthBox';
import { Button } from '../../components/common/Button';
import { Input, InputChangeEventType } from '../../components/common/Input/Input';
import { FormStateType } from '../Login/Login';

import styles from './NewPassword.module.scss';

export const NewPassword = () => {
  const [value, setValue] = useState<FormStateType>({});
  const onChange = (e: InputChangeEventType) => {
    const targetName = e.currentTarget.name;
    setValue({ ...value, [targetName]: e.currentTarget.value });
  };
  const sendPasswordHandler = () => {
    console.log(value);
  };
  return (
    <div className={styles.password}>
      <AuthBox>
        <h3 className={styles.password__subtitle}>Forgot your password?</h3>
        <div>
          <Input
            type="password"
            title="Password"
            name="password"
            onChange={onChange}
            value={value.password}
          />
          <p className={styles.password__info}>
            Create new password and we will send you further instructions to email
          </p>
          <div className={styles.password__button}>
            <Button
              title="Create new password"
              type="button"
              onClick={sendPasswordHandler}
            />
          </div>
        </div>
      </AuthBox>
    </div>
  );
};

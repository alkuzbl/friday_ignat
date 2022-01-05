import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';

import { AuthBox } from '../../../components/common/AuthBox/AuthBox';
import { Button } from '../../../components/common/Button';
import { Input, InputChangeEventType } from '../../../components/common/Input/Input';
import { FormStateType } from '../Login/Login';

import styles from './RecoveryPassword.module.scss';

export const RecoveryPassword = () => {
  const [value, setValue] = useState<FormStateType>({});
  const onChange = (e: InputChangeEventType) => {
    const targetName = e.currentTarget.name;
    setValue({ ...value, [targetName]: e.currentTarget.value });
  };
  return (
    <div className="container-center">
      <div className={styles.recovery}>
        <AuthBox>
          <h3 className={styles.recovery__subtitle}>Forgot your password?</h3>
          <div>
            <Input
              type="email"
              title="Email"
              name="email"
              onChange={onChange}
              value={value.email}
            />
            <p className={styles.recovery__emailText}>
              Enter your email address and we will send you further instructions
            </p>
            <div className={styles.recovery__button}>
              <Button title="login" type="submit" />
            </div>

            <p className={styles.recovery__passwordText}>
              Did you remember your password?
            </p>

            <NavLink to="/registration" className={styles.recovery__loginLink}>
              Try logging in
            </NavLink>
          </div>
        </AuthBox>
      </div>
    </div>
  );
};

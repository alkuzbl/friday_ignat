import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';

import { AuthBox } from '../../components/common/AuthBox/AuthBox';
import { Button } from '../../components/common/Button';
import { FormControl } from '../../components/common/Form/FormControl/FormControl';
import { Input, InputChangeEventType } from '../../components/common/Input/Input';

import styles from './Login.module.scss';

export type FormStateType = {
  [key: string]: string;
};

export const Login = () => {
  const [value, setValue] = useState<FormStateType>({});
  const onChange = (e: InputChangeEventType) => {
    const targetName = e.currentTarget.name;
    setValue({ ...value, [targetName]: e.currentTarget.value });
  };
  return (
    <div className={styles.login}>
      <AuthBox>
        <h3 className={styles.login__subtitle}>Sign In</h3>
        <div>
          <FormControl resetValue={setValue} onSubmitValue={value}>
            <Input
              type="email"
              title="Email"
              name="email"
              onChange={onChange}
              value={value.email}
            />
            <Input
              type="password"
              title="Password"
              name="password"
              onChange={onChange}
              value={value.password}
            />
            <div className={styles.login__forgotInner}>
              <NavLink to="/recovery" className={styles.login__forgotLink}>
                Forgot Password
              </NavLink>
            </div>
            <Button title="login" type="submit" />
          </FormControl>

          <div>
            <span className={styles.login__span}>Don’t have an account?</span>
            <NavLink to="/registration" className={styles.login__registrationLink}>
              Sign Up
            </NavLink>
          </div>
        </div>
      </AuthBox>
    </div>
  );
};

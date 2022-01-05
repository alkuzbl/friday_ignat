import React, { CSSProperties, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';

import { loginToTheApp, setStatus, StatusType } from '../../../bll/login-slice';
import { AppStoreType } from '../../../bll/store';
import { AuthBox } from '../../../components/common/AuthBox/AuthBox';
import { Button } from '../../../components/common/Button';
import { FormControl } from '../../../components/common/Form/FormControl/FormControl';
import { Input, InputChangeEventType } from '../../../components/common/Input/Input';

import styles from './Login.module.scss';

export type FormStateType = {
  [key: string]: string;
};

export const Login = () => {
  const [value, setValue] = useState<any>({});
  const isAuth = useSelector<AppStoreType, boolean>(state => state.auth.isAuth);
  const requestStatus = useSelector<AppStoreType, StatusType>(state => state.auth.status);
  const dispatch = useDispatch();

  // const onChangeCheck = (e: ChangeEvent<HTMLInputElement>) => {
  //   console.log(e.currentTarget.checked);
  // };

  const onChange = (e: InputChangeEventType) => {
    const targetName = e.currentTarget.name;
    setValue({ ...value, [targetName]: e.currentTarget.value });
  };
  const onClickHandler = () => {
    dispatch(loginToTheApp({ ...value, rememberMe: true }));
  };

  const resetAuthStatus = () => dispatch(setStatus('idle'));

  if (isAuth) {
    return <Navigate to="/" />;
  }
  const disabledStyle: CSSProperties =
    requestStatus === 'loading' ? { pointerEvents: 'none', opacity: '.8' } : {};
  return (
    <div className="container-center" style={disabledStyle}>
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
              <Button title="login" type="submit" onClick={onClickHandler} />
            </FormControl>

            <div>
              <span className={styles.login__span}>Don’t have an account?</span>
              <NavLink
                to="/registration"
                className={styles.login__registrationLink}
                onClick={resetAuthStatus}
              >
                Sign Up
              </NavLink>
            </div>
          </div>
        </AuthBox>
      </div>
    </div>
  );
};

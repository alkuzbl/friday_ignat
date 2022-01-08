import React, { CSSProperties } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';

import { loginToTheApp, setStatus, StatusType } from '../../../bll/login-slice';
import { AppStoreType } from '../../../bll/store';
import { AuthBox } from '../../../components/common/AuthBox/AuthBox';
import { Button } from '../../../components/common/Button';
import { FormControl } from '../../../components/common/FormControl/FormControl';
import { InputF } from '../../../components/common/InputForReactHF/InputF';
import { LoginDataType } from '../../../dal/auth-api';
import { loginValidationSchema } from '../../../utils/validationSchemes';

import styles from './Login.module.scss';
// удалить
export type FormStateType = {
  [key: string]: string;
};

export const Login = () => {
  const isAuth = useSelector<AppStoreType, boolean>(state => state.auth.isAuth);

  const requestStatus = useSelector<AppStoreType, StatusType>(state => state.auth.status);
  const dispatch = useDispatch();

  const onSubmit = (data: LoginDataType) => {
    dispatch(loginToTheApp(data));
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
            <FormControl onSubmit={onSubmit} defaultValues={loginValidationSchema}>
              <InputF type="email" label="Email" name="email" autoComplete="username" />
              <InputF
                type="password"
                label="Password"
                name="password"
                autoComplete="current-password"
              />
              <InputF
                type="checkbox"
                label="Remember me"
                name="rememberMe"
                className={styles.login__checkbox}
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

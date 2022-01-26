import React, { CSSProperties } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';

import { StatusType } from 'app/types';
import { login } from 'bll/middlewares/authThunks/login';
import { AppStoreType } from 'bll/store';
import { AuthBox, Button, FormControl, InputF } from 'components';
import { LoginDataType } from 'dal/auth-api';
import { loginValidationSchema } from 'utils/validationSchemes';
import styles from 'view/Authentication/Login/style/Login.module.scss';
// удалить
export type FormStateType = {
  [key: string]: string;
};

export const Login = () => {
  const requestStatus = useSelector<AppStoreType, StatusType>(state => state.app.status);
  const isAuth = useSelector<AppStoreType, boolean>(state => state.auth.isAuth);
  const userId = useSelector<AppStoreType, string>(state => state.auth.user._id);

  const dispatch = useDispatch();

  const onSubmit = (data: LoginDataType) => {
    dispatch(login(data));
  };

  const disabledStyle: CSSProperties =
    requestStatus === 'loading' ? { pointerEvents: 'none', opacity: '.8' } : {};

  if (isAuth) {
    return <Navigate to={`/profile/${userId}/pack-page/1`} />;
  }

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
              <NavLink to="/registration" className={styles.login__registrationLink}>
                Sign Up
              </NavLink>
            </div>
          </div>
        </AuthBox>
      </div>
    </div>
  );
};

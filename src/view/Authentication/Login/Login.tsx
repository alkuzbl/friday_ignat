import React, { CSSProperties } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';

import { StatusType } from '../../../app/app-slice';
import { login, setStatus } from '../../../bll/auth-slice';
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
  const dispatch = useDispatch();
  const requestStatus = useSelector<AppStoreType, StatusType>(state => state.auth.status);
  const isAuth = useSelector<AppStoreType, boolean>(state => state.auth.isAuth);
  const userId = useSelector<AppStoreType, string>(state => state.auth.user._id);
  const onSubmit = (data: LoginDataType) => {
    dispatch(login(data));
  };
  const resetAuthStatus = () => {
    dispatch(setStatus('idle'));
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
            {/* Этот FormControl только для react-hook-form - это общая универсальная обертка для инпутов (инпуты вкладывать в дивки или иные блоки нельзя - не будет работать). Инпут также только для использывания с данным FormControl */}
            <FormControl onSubmit={onSubmit} defaultValues={loginValidationSchema}>
              {/* // пропсы, которые принимает инпут смотрите внутри компоненты */}
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
              {/* // кнопка универсальная - поиграйтесь с ней */}
              <Button title="login" type="submit" />
            </FormControl>

            <div>
              <span className={styles.login__span}>Don’t have an account?</span>
              {/* // это с react-router dom */}
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

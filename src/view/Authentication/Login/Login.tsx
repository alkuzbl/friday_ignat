import React, { CSSProperties, useState } from 'react';

import { NavLink } from 'react-router-dom';

import { AuthBox } from '../../../components/common/AuthBox/AuthBox';
import { Button } from '../../../components/common/Button';
import { FormControl } from '../../../components/common/FormControl/FormControl';
import { InputF } from '../../../components/common/InputForReactHF/InputF';
import { loginValidationSchema } from '../../../utils/validationSchemes';

import styles from './Login.module.scss';
// удалить
export type FormStateType = {
  [key: string]: string;
};

export const Login = () => {
  const onSubmit = () => {};

  const resetAuthStatus = () => {};
  // заглушка
  const [requestStatus] = useState<'idle' | 'loading' | 'failed' | 'succeed'>('idle');
  // стили для полной блокировки блока при запросе на сервер
  const disabledStyle: CSSProperties =
    requestStatus === 'loading' ? { pointerEvents: 'none', opacity: '.8' } : {};
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

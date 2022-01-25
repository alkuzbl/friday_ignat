import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';

import { forgotPassword } from 'bll/middlewares';
import { AppStoreType } from 'bll/store';
import { AuthBox, Button, FormControl, InputF } from 'components';
import { recoveryValidationSchema } from 'utils/validationSchemes';
import styles from 'view/Authentication/RecoveryPassword/style/RecoveryPassword.module.scss';

export const RecoveryPassword = () => {
  const isAuth = useSelector<AppStoreType, boolean>(state => state.auth.isAuth);

  const dispatch = useDispatch();

  const message = `<div style='background-color: lime; padding: 15px'>
password recovery link: 
<a href='https://alkuzbl.github.io/friday_ignat/#/new-password/$token$'>link</a></div>`;

  if (isAuth) {
    return <Navigate to="/profile" />;
  }

  const onSubmit = (data: { email: string }) => {
    dispatch(
      forgotPassword({
        email: data.email,
        from: 'Friday-Ignat',
        message,
      }),
    );
  };

  return (
    <div className="container-center">
      <div className={styles.recovery}>
        <AuthBox>
          <h3 className={styles.recovery__subtitle}>Forgot your password?</h3>
          <div>
            {/* схемы валидации отдельным файлом в папке utils */}
            <FormControl onSubmit={onSubmit} defaultValues={recoveryValidationSchema}>
              <InputF type="email" required label="Email" name="email" />
              <p className={styles.recovery__emailText}>
                Enter your email address and we will send you further instructions
              </p>
              <div className={styles.recovery__button}>
                <Button title="Send Instructions" type="submit" />
              </div>
            </FormControl>

            <p className={styles.recovery__passwordText}>
              Did you remember your password?
            </p>

            <NavLink to="/login" className={styles.recovery__loginLink}>
              Try logging in
            </NavLink>
          </div>
        </AuthBox>
      </div>
    </div>
  );
};

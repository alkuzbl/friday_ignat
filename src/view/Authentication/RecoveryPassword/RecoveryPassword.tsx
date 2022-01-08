import React from 'react';

import { useSelector } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';

import { AppStoreType } from '../../../bll/store';
import { AuthBox } from '../../../components/common/AuthBox/AuthBox';
import { Button } from '../../../components/common/Button';
import { FormControl } from '../../../components/common/FormControl/FormControl';
import { InputF } from '../../../components/common/InputForReactHF/InputF';
import { recoveryValidationSchema } from '../../../utils/validationSchemes';

import styles from './RecoveryPassword.module.scss';

export const RecoveryPassword = () => {
  const isAuth = useSelector<AppStoreType, boolean>(state => state.auth.isAuth);

  const onSubmit = (data: { email: string }) => {
    console.log(data);
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <div className="container-center">
      <div className={styles.recovery}>
        <AuthBox>
          <h3 className={styles.recovery__subtitle}>Forgot your password?</h3>
          <div>
            <FormControl onSubmit={onSubmit} defaultValues={recoveryValidationSchema}>
              <InputF type="email" required label="Email" name="email" />
              <p className={styles.recovery__emailText}>
                Enter your email address and we will send you further instructions
              </p>
              <div className={styles.recovery__button}>
                <Button title="login" type="submit" />
              </div>
            </FormControl>

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

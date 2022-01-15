import React from 'react';

import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { forgotPassword } from '../../../bll/auth-slice';
import { AuthBox } from '../../../components/common/AuthBox/AuthBox';
import { Button } from '../../../components/common/Button';
import { FormControl } from '../../../components/common/FormControl/FormControl';
import { InputF } from '../../../components/common/InputForReactHF/InputF';
import { recoveryValidationSchema } from '../../../utils/validationSchemes';

import styles from './RecoveryPassword.module.scss';

export const RecoveryPassword = () => {
  const dispatch = useDispatch();

  const message = `<div style='background-color: lime; padding: 15px'>
password recovery link: 
<a href='https://alkuzbl.github.io/friday_ignat/#/new-password/#/new-password/$token$'>link</a></div>`;

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

import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { setRegistrationNewUser, StatusType } from '../../../bll/login-slice';
import { AppStoreType } from '../../../bll/store';
import { AuthBox } from '../../../components/common/AuthBox/AuthBox';
import { Button } from '../../../components/common/Button';
import { FormControl } from '../../../components/common/FormControl/FormControl';
import { InputF } from '../../../components/common/InputForReactHF/InputF';
import { registrationValidationSchema } from '../../../utils/validationSchemes';

import styles from './Registration.module.scss';

type RegistrationFormValuesType = {
  email: string;
  password: string;
  confirmPassword: string;
};

export const Registration = () => {
  const status = useSelector<AppStoreType, StatusType>(state => state.auth.status);
  const isAuth = useSelector<AppStoreType, boolean>(state => state.auth.isAuth);
  const dispatch = useDispatch();

  const onSubmit = (data: RegistrationFormValuesType) => {
    if (data.password === data.confirmPassword) {
      const payload = { email: data.email, password: data.password };
      dispatch(setRegistrationNewUser(payload));
    }
  };

  if (status === 'succeed') {
    return <Navigate to="/login" />;
  }
  if (isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <div className="container-center">
      <div className={styles.registration}>
        <AuthBox>
          <h3 className={styles.registration__subtitle}>Sign In</h3>
          <div>
            <FormControl defaultValues={registrationValidationSchema} onSubmit={onSubmit}>
              <InputF
                type="email"
                required
                label="Email"
                name="email"
                autoComplete="username"
              />
              <InputF
                type="password"
                required
                label="Password"
                name="password"
                autoComplete="new-password"
              />
              <InputF
                type="password"
                required
                label="Confirm password"
                name="confirmPassword"
                autoComplete="new-password"
              />
              <div className={styles.registration__buttonBox}>
                <div className={styles.registration__channel}>
                  <Button title="Cancel" view="transparent" type="link" path="/login" />
                </div>
                <div className={styles.registration__login}>
                  <Button title="SignUp" type="submit" />
                </div>
              </div>
            </FormControl>
          </div>
        </AuthBox>
      </div>
    </div>
  );
};

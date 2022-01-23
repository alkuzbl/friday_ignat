import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { StatusType } from 'app/app-slice';
import { registerUser } from 'bll/auth-slice';
import { AppStoreType } from 'bll/store';
import { AuthBox, Button, FormControl, InputF } from 'components';
import { registrationValidationSchema } from 'utils/validationSchemes';
import styles from 'view/Authentication/Registration/style/Registration.module.scss';

type RegistrationFormValuesType = {
  email: string;
  password: string;
  confirmPassword: string;
};

export const Registration = () => {
  const requestStatus = useSelector<AppStoreType, StatusType>(state => state.auth.status);

  const dispatch = useDispatch();

  const onSubmit = (data: RegistrationFormValuesType) => {
    if (data.password === data.confirmPassword) {
      dispatch(registerUser(data));
    }
  };

  if (requestStatus === 'succeed') {
    return <Navigate to="/login" />;
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

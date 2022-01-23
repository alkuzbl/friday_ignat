import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';

import { StatusType } from 'app/app-slice';
import { setNewPassword } from 'bll/auth-slice';
import { AppStoreType } from 'bll/store';
import { AuthBox, Button, FormControl, InputF } from 'components';
import { newPasswordValidationSchema } from 'utils/validationSchemes';
import styles from 'view/Authentication/NewPassword/style/NewPassword.module.scss';

export const NewPassword = () => {
  const requestStatus = useSelector<AppStoreType, StatusType>(state => state.auth.status);

  const dispatch = useDispatch();

  const { token } = useParams<'token' | 'id'>();

  const onSubmit = (data: { password: string }) => {
    dispatch(setNewPassword({ password: data.password, resetPasswordToken: token }));
  };

  if (requestStatus === 'succeed') {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container-center">
      <div className={styles.password}>
        <AuthBox>
          <h3 className={styles.password__subtitle}>Create new password</h3>
          <div>
            <FormControl onSubmit={onSubmit} defaultValues={newPasswordValidationSchema}>
              <InputF
                type="password"
                required
                label="Password"
                name="password"
                autoComplete="new-password"
              />
              <p className={styles.password__info}>
                Create new password and we will send you further instructions to email
              </p>
              <div className={styles.password__button}>
                <Button title="Create new password" type="submit" />
              </div>
            </FormControl>
          </div>
        </AuthBox>
      </div>
    </div>
  );
};

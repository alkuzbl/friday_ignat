import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';

import { setNewPassword, StatusType } from '../../../bll/auth-slice';
import { AppStoreType } from '../../../bll/store';
import { AuthBox } from '../../../components/common/AuthBox/AuthBox';
import { Button } from '../../../components/common/Button';
import { FormControl } from '../../../components/common/FormControl/FormControl';
import { InputF } from '../../../components/common/InputForReactHF/InputF';
import { newPasswordValidationSchema } from '../../../utils/validationSchemes';

import styles from './NewPassword.module.scss';

export const NewPassword = () => {
  const requestStatus = useSelector<AppStoreType, StatusType>(state => state.auth.status);

  const { token } = useParams<'token' | 'id'>();

  const dispatch = useDispatch();

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

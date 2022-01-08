import React from 'react';

import { useDispatch } from 'react-redux';

import { setNewPassword } from '../../../bll/login-slice';
import { AuthBox } from '../../../components/common/AuthBox/AuthBox';
import { Button } from '../../../components/common/Button';
import { FormControl } from '../../../components/common/FormControl/FormControl';
import { InputF } from '../../../components/common/InputForReactHF/InputF';
import { newPasswordValidationSchema } from '../../../utils/validationSchemes';

import styles from './NewPassword.module.scss';

export const NewPassword = () => {
  const dispatch = useDispatch();
  const onSubmit = (data: { password: string }) => {
    dispatch(setNewPassword(data));
  };
  return (
    <div className="container-center">
      <div className={styles.password}>
        <AuthBox>
          <h3 className={styles.password__subtitle}>Forgot your password?</h3>
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
                <Button title="Create new password" type="button" />
              </div>
            </FormControl>
          </div>
        </AuthBox>
      </div>
    </div>
  );
};

// export const NewPasswordContainer = RedirectionIfNotAuthorized(NewPassword);

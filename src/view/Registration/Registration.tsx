import React, { useState } from 'react';

import { AuthBox } from '../../components/common/AuthBox/AuthBox';
import { Button } from '../../components/common/Button';
import { FormControl } from '../../components/common/Form/FormControl/FormControl';
import { Input, InputChangeEventType } from '../../components/common/Input/Input';
import { FormStateType } from '../Login/Login';

import styles from './Registration.module.scss';

export const Registration = () => {
  const [value, setValue] = useState<FormStateType>({});
  const onChange = (e: InputChangeEventType) => {
    const targetName = e.currentTarget.name;
    setValue({ ...value, [targetName]: e.currentTarget.value });
  };
  return (
    <div className={styles.registration}>
      <AuthBox>
        <h3 className={styles.registration__subtitle}>Sign In</h3>
        <div>
          <FormControl resetValue={setValue} onSubmitValue={value}>
            <Input
              type="email"
              title="Email"
              name="email"
              onChange={onChange}
              value={value.email}
            />
            <Input
              type="password"
              title="Password"
              name="password"
              onChange={onChange}
              value={value.password}
            />
            <Input
              type="password"
              title="Confirm password"
              name="confirm"
              onChange={onChange}
              value={value.confirm}
            />

            <div className={styles.registration__buttonBox}>
              <div className={styles.registration__channel}>
                <Button title="Channel" view="transparent" type="link" path="/login" />
              </div>
              <div className={styles.registration__login}>
                <Button title="login" type="submit" />
              </div>
            </div>
          </FormControl>
        </div>
      </AuthBox>
    </div>
  );
};

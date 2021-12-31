import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';

import { FormStateType } from '../../view/Login/Login';
import styles from '../../view/Login/Login.module.scss';

import { AuthBox } from './AuthBox/AuthBox';
import { Button } from './Button';
import Checkbox from './Checkbox/Checkbox';
import { FormControl } from './Form/FormControl/FormControl';
import { Input, InputChangeEventType } from './Input/Input';

const styleForCommonPage = { backgroundColor: '#e3e3e3', padding: '10px 100px' };
const styleForButtonContainer = { display: 'inline-flex' };
export const CommonComponents = () => {
  const onClickAlertMessage = () => {
    // eslint-disable-next-line no-alert
    alert('Button click');
  };
  const [value, setValue] = useState<FormStateType>({});
  const onChange = (e: InputChangeEventType) => {
    const targetName = e.currentTarget.name;
    setValue({ ...value, [targetName]: e.currentTarget.value });
  };
  return (
    <div style={styleForCommonPage}>
      <h3 style={{ marginBottom: '40px' }}>Common components</h3>
      <div style={styleForButtonContainer}>
        <div style={{ margin: '0 50px 30px' }}>
          <h4 style={{ marginBottom: '20px' }}>Button</h4>
          <Button title="Click me" onClick={onClickAlertMessage} type="submit" />
        </div>
        <div style={{ margin: '0 50px 30px' }}>
          <h4 style={{ marginBottom: '20px' }}>Button disabled</h4>
          <Button title="Click me" onClick={onClickAlertMessage} type="submit" disabled />
        </div>
        <div style={{ margin: '0 50px 30px' }}>
          <h4 style={{ marginBottom: '20px' }}>Button transparent</h4>
          <Button
            title="Click me"
            onClick={onClickAlertMessage}
            type="button"
            view="transparent"
          />
        </div>
        <div style={{ margin: '0 50px 30px' }}>
          <h4 style={{ marginBottom: '20px' }}>Button transparent disabled</h4>
          <Button
            title="Click me"
            onClick={onClickAlertMessage}
            view="transparent"
            type="submit"
            disabled
          />
        </div>
        <div style={{ marginBottom: '30px' }}>
          <h4 style={{ marginBottom: '20px' }}>CheckBox</h4>
          <Checkbox />
        </div>
      </div>
      <div>
        <h4>Input</h4>
        <Input type="text" value="" title="email" />
      </div>
      <div>
        <h4>Form</h4>
        <AuthBox>
          <h3 className={styles.login__subtitle}>Sign In</h3>
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
              <div className={styles.login__forgotInner}>
                <NavLink to="/recovery" className={styles.login__forgotLink}>
                  Forgot Password
                </NavLink>
              </div>
              <Button title="login" type="submit" />
            </FormControl>

            <div>
              <span className={styles.login__span}>Don’t have an account?</span>
              <NavLink to="/registration" className={styles.login__registrationLink}>
                Sign Up
              </NavLink>
            </div>
          </div>
        </AuthBox>
      </div>
    </div>
  );
};

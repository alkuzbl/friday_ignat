import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { AppStoreType } from '../../../../bll/store';
import { Button } from '../../../../components/common/Button';
import { EditableSpan } from '../../../../components/common/EditableSpan/EditableSpan';
import { FormControl } from '../../../../components/common/Form/FormControl/FormControl';
import { FormStateType } from '../../../Login/Login';
import { UserImageBox } from '../UserImageBox/UserImageBox';

import styles from './ProfileEdit.module.scss';

export const ProfileEdit = () => {
  const isAuth = useSelector<AppStoreType, boolean>(state => state.auth.isAuth);

  const [value, setValue] = useState<FormStateType>({
    name: 'Sasha',
    email: 'test@test.ru',
  });
  const onChangeFormValue = (val: FormStateType) => {
    setValue({ ...value, ...val });
  };

  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  const { avatar } = useSelector<AppStoreType, any>(state => state.auth.user);
  return (
    <div className={styles.profileEdit}>
      <div className={styles.editBox}>
        <h3 className={styles.editBox__title}>Personal Information</h3>
        <div className={styles.editBox__image}>
          <UserImageBox icon={avatar} />
        </div>
        <FormControl onSubmitValue={value}>
          <div className={styles.editBox__userData}>
            <EditableSpan
              value={value.name}
              onChange={onChangeFormValue}
              name="name"
              placeholder="Name"
              iconEditButton
            />
            <EditableSpan
              value={value.email}
              onChange={onChangeFormValue}
              name="email"
              placeholder="Email"
              iconEditButton
            />
          </div>
          <div className={styles.editBox__buttonBox}>
            <div className={styles.editBox__button}>
              <Button title="Cancel" type="link" view="transparent" path="/profile" />
            </div>
            <div className={styles.editBox__button}>
              <Button title="Save" type="submit" view="default" />
            </div>
          </div>
        </FormControl>
      </div>
    </div>
  );
};

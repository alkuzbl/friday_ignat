import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { UserImageBox } from '../UserImageBox/UserImageBox';

import { updatedUserData } from 'bll/middlewares';
import { AppStoreType } from 'bll/store';
import { Button } from 'components/common/Button';
import { EditableSpan } from 'components/common/EditableSpan/EditableSpan';
import { Form } from 'components/common/Form/Form';
import { UserType } from 'dal/auth-api';
import { RedirectionIfNotAuthorized } from 'hoc/RedirectionIfNotAuthorized';
import { FormStateType } from 'view/Authentication/Login/Login';
import styles from 'view/ProfilePage/Profile/ProfileEdit/style/ProfileEdit.module.scss';
// потом все переменные вынести
const PREV_PAGE = -1;

const ProfileEdit = () => {
  const { name, avatar } = useSelector<AppStoreType, UserType>(state => state.auth.user);
  const [value, setValue] = useState<FormStateType>({ name });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const savingEditableUserData = () => {
    dispatch(updatedUserData(value));
  };

  const onChangeFormValue = (val: FormStateType) => {
    setValue({ ...value, ...val });
  };

  const goBack = () => navigate(PREV_PAGE);

  return (
    <div className={styles.profileEdit}>
      <div className={styles.editBox}>
        <h3 className={styles.editBox__title}>Personal Information</h3>
        <div className={styles.editBox__image}>
          <UserImageBox icon={avatar} />
        </div>
        <Form onSubmitValue={value}>
          <div className={styles.editBox__userData}>
            <EditableSpan
              value={value.name}
              onChange={onChangeFormValue}
              name="name"
              placeholder="Name"
              iconEditButton
            />
          </div>
          <div className={styles.editBox__buttonBox}>
            <div className={styles.editBox__button}>
              <Button title="Cancel" type="button" view="transparent" onClick={goBack} />
            </div>
            <div className={styles.editBox__button}>
              <Button
                title="Save"
                type="submit"
                view="default"
                onClick={savingEditableUserData}
              />
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export const ProfileEditContainer = RedirectionIfNotAuthorized(ProfileEdit);

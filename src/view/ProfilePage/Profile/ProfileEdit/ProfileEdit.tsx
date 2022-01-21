import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { updatedUserData } from '../../../../bll/auth-slice';
import { AppStoreType } from '../../../../bll/store';
import { Button } from '../../../../components/common/Button';
import { EditableSpan } from '../../../../components/common/EditableSpan/EditableSpan';
import { FormControl } from '../../../../components/common/Form/FormControl/FormControl';
import { UserType } from '../../../../dal/auth-api';
import { RedirectionIfNotAuthorized } from '../../../../hoc/RedirectionIfNotAuthorized';
import { FormStateType } from '../../../Authentication/Login/Login';
import { UserImageBox } from '../UserImageBox/UserImageBox';

import styles from './ProfileEdit.module.scss';

const ProfileEdit = () => {
  const { name, avatar } = useSelector<AppStoreType, UserType>(state => state.auth.user);
  const [value, setValue] = useState<FormStateType>({ name });
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const savingEditableUserData = () => {
    dispatch(updatedUserData(value));
  };

  const onChangeFormValue = (val: FormStateType) => {
    setValue({ ...value, ...val });
  };

  const goBack = () => navigate(-1);

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
        </FormControl>
      </div>
    </div>
  );
};

export const ProfileEditContainer = RedirectionIfNotAuthorized(ProfileEdit);

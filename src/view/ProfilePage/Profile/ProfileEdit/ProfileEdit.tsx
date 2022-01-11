import React, { useState } from 'react';

import { Button } from '../../../../components/common/Button';
import { EditableSpan } from '../../../../components/common/EditableSpan/EditableSpan';
import { FormControl } from '../../../../components/common/Form/FormControl/FormControl';
import avatar from '../../../../issets/images/user_icon.svg';
import { FormStateType } from '../../../Authentication/Login/Login';
import { UserImageBox } from '../UserImageBox/UserImageBox';

import styles from './ProfileEdit.module.scss';

export const ProfileEdit = () => {
  const [value, setValue] = useState<FormStateType>({ name: 'Sasha' });
  const savingEditableUserData = () => {
    console.log(value);
  };
  const onChangeFormValue = (val: FormStateType) => {
    setValue({ ...value, ...val });
  };

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
              <Button title="Cancel" type="link" view="transparent" path="/profile" />
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

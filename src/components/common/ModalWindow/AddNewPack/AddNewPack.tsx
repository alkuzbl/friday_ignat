import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { createCardsPack, setActiveModalCardsPack } from '../../../../bll/pack-slice';
import styles from '../../../../view/PacksListPage/CommonPacksList/PackListItem/PopupConfirmationProcessing/PopupConfirmationProcessing.module.scss';
import { Button } from '../../Button';
import { Input, InputChangeEventType } from '../../Input/Input';

export const AddNewPack = () => {
  const [value, setValue] = useState<string>('');
  const onChangeHandler = (e: InputChangeEventType) => {
    setValue(e.currentTarget.value);
  };
  const dispatch = useDispatch();
  const savePack = () => {
    dispatch(createCardsPack({ name: value }));
  };
  const cancel = () => {
    dispatch(setActiveModalCardsPack({ status: false, packName: '', packId: '' }));
  };
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      className={styles.popup}
      onClick={e => {
        e.stopPropagation();
      }}
      onKeyDown={event => {
        console.log(event);
      }}
    >
      <div className={styles.popup__titleBox}>
        <h3 className={styles.popup__title}>Add new pack</h3>
        <Button title="X" type="button" view="popup-close" onClick={cancel} />
      </div>
      <p className={styles.popup__content}>
        Enter the <span>Package name</span>, then dont forget to add the question and
        answer sheets ...
      </p>
      <div style={{ marginBottom: '30px' }}>
        <Input type="text" value={value} onChange={onChangeHandler} title="PackName" />
      </div>

      <div className={styles.popup__buttonsInner}>
        <Button
          title="Cancel"
          type="button"
          view="default-for-pack-name"
          onClick={cancel}
        />
        <Button
          title="Save"
          type="button"
          view="default-for-pack-name"
          onClick={savePack}
        />
      </div>
    </div>
  );
};

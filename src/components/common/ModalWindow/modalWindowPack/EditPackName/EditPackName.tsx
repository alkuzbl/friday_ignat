import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  ModalWindowPackType,
  setInactiveModalWindow,
} from '../../../../../app/app-slice';
import { updateCardsPack } from '../../../../../bll/pack-slice';
import { AppStoreType } from '../../../../../bll/store';
import { createPackValidationSchema } from '../../../../../utils/validationSchemes';
import { Button } from '../../../Button';
import { FormControl } from '../../../FormControl/FormControl';
import { InputF } from '../../../InputForReactHF/InputF';
import styles from '../PackDeletingForm/PopupConfirmationProcessing.module.scss';

export const EditPackName = () => {
  const { _id, name } = useSelector<AppStoreType, ModalWindowPackType>(
    state => state.app.modalWindow.modalWindowData,
  );
  const dispatch = useDispatch();

  const saveNewName = (data: ModalWindowPackType) =>
    dispatch(updateCardsPack({ _id, ...data }));
  const cancel = () => dispatch(setInactiveModalWindow());

  const onClickDiv = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
    e.stopPropagation();
  return (
    <div role="presentation" className={styles.popup} onClick={onClickDiv}>
      <div className={styles.popup__titleBox}>
        <h3 className={styles.popup__title}>Edit the package name</h3>
        <Button title="X" type="button" view="popup-close" onClick={cancel} />
      </div>
      <p className={styles.popup__content}>
        Enter a new name for the <span>package - {name}</span> in the field below
      </p>
      <FormControl onSubmit={saveNewName} defaultValues={createPackValidationSchema}>
        <InputF label="Pack name" name="name" type="text" />
        <div className={styles.popup__buttonsInner}>
          <Button
            title="Cancel"
            type="button"
            view="default-for-pack-name"
            onClick={cancel}
          />
          <Button title="Save" type="submit" view="default-for-pack-name" />
        </div>
      </FormControl>
    </div>
  );
};

import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../../Button';
import { InputF } from '../../../InputForReactHF/InputF';

import { ModalWindowPackType, setInactiveModalWindow } from 'app/app-slice';
import { updateCardsPack } from 'bll/pack-slice';
import { AppStoreType } from 'bll/store';
import { FormControl } from 'components/common/FormControl';
import styles from 'components/common/ModalWindow/modalWindowPack/PackDeletingForm/style/PackDeletingForm.module.scss';
import { createPackValidationSchema } from 'utils/validationSchemes';

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
        <InputF label="PackageCardsMe name" name="name" type="text" />
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

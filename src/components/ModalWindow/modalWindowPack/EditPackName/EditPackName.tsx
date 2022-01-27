import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setInactiveModalWindow } from 'app/app-slice';
import { ModalWindowCardType, ModalWindowPackType } from 'app/types';
import { updateCardsPack } from 'bll/middlewares';
import { AppStoreType } from 'bll/store';
import { Button } from 'components/common/Button';
import { FormControl } from 'components/common/FormControl';
import { InputF } from 'components/common/InputForReactHF/InputF';
import styles from 'components/ModalWindow/modalWindowPack/PackDeletingForm/style/PackDeletingForm.module.scss';
import { createPackValidationSchema } from 'utils/validationSchemes';

export const EditPackName = () => {
  // @ts-ignore
  const { name, _id } = useSelector<
    AppStoreType,
    ModalWindowPackType | ModalWindowCardType
  >(state => state.app.modalWindow.modalWindowData);
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

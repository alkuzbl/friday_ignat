import React from 'react';

import { useDispatch } from 'react-redux';

import { setInactiveModalWindow } from '../../../../../app/app-slice';
import { createNewPack } from '../../../../../bll/pack-slice';
import { createPackValidationSchema } from '../../../../../utils/validationSchemes';
import { Button } from '../../../Button';
import { FormControl } from '../../../FormControl/FormControl';
import { InputF } from '../../../InputForReactHF/InputF';
import styles from '../PackDeletingForm/PopupConfirmationProcessing.module.scss';

export const AddNewPack = () => {
  const dispatch = useDispatch();
  const onSubmit = (data: { name: string }) => dispatch(createNewPack(data));
  const cancel = () => dispatch(setInactiveModalWindow());

  const onClickDiv = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
    e.stopPropagation();
  return (
    <div role="presentation" className={styles.popup} onClick={onClickDiv}>
      <div className={styles.popup__titleBox}>
        <h3 className={styles.popup__title}>Add new pack</h3>
        <Button title="X" type="button" view="popup-close" onClick={cancel} />
      </div>
      <p className={styles.popup__content}>
        Enter the <span>Package name</span>, then dont forget to add the question and
        answer sheets ...
      </p>
      <FormControl onSubmit={onSubmit} defaultValues={createPackValidationSchema}>
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

      <div style={{ marginBottom: '30px' }} />
    </div>
  );
};

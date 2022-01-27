import React from 'react';

import { useDispatch } from 'react-redux';

import { setInactiveModalWindow } from 'app/app-slice';
import { createNewPack } from 'bll/middlewares/packThunks/createNewPack';
import { Button } from 'components/common/Button';
import { FormControl } from 'components/common/FormControl';
import { InputF } from 'components/common/InputForReactHF/InputF';
import styles from 'components/ModalWindow/modalWindowPack/PackDeletingForm/style/PackDeletingForm.module.scss';
import { createPackValidationSchema } from 'utils/validationSchemes';

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

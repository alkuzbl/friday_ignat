import React from 'react';

import { useDispatch } from 'react-redux';

import { setInactiveModalWindow } from '../../../../../app/app-slice';
import { cardInfoValidationSchema } from '../../../../../utils/validationSchemes';
import { Button } from '../../../Button';
import { FormControl } from '../../../FormControl/FormControl';
import { InputF } from '../../../InputForReactHF/InputF';

import styles from './CardInfo.module.scss';

export type DataCardFormType = { question: string; answer: string };
type CardInfoPropsType = {
  onSubmit: (data: DataCardFormType) => void;
};

export const CardInfo = (props: CardInfoPropsType) => {
  const { onSubmit } = props;
  const dispatch = useDispatch();
  const onSubmitHandler = (data: DataCardFormType) => {
    onSubmit(data);
  };
  const onClickCancel = () => {
    dispatch(setInactiveModalWindow());
  };
  const onClickDiv = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
    e.stopPropagation();
  return (
    <div className={styles.popup} role="presentation" onClick={onClickDiv}>
      <h3 className={styles.popup__title}>Card info</h3>
      <div className={styles.popup__inner}>
        <FormControl onSubmit={onSubmitHandler} defaultValues={cardInfoValidationSchema}>
          <InputF
            label="Question"
            name="question"
            type="text"
            className={styles.popup__input}
          />
          <InputF
            label="Answer"
            name="answer"
            type="text"
            className={styles.popup__input}
          />
          <div className={styles.popup__buttonsInner}>
            <Button
              title="Cancel"
              type="button"
              view="default-for-pack-name"
              onClick={onClickCancel}
            />
            <Button title="Save" type="submit" view="default-for-pack-name" />
          </div>
        </FormControl>
      </div>
    </div>
  );
};

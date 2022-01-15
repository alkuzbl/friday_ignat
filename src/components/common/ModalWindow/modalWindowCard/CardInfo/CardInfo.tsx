import React from 'react';

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
  const onSubmitHandler = (data: DataCardFormType) => onSubmit(data);
  return (
    <div className={styles.popup}>
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
        </FormControl>
      </div>

      <div className={styles.popup__buttonsInner}>
        <Button title="Cancel" type="button" view="default-for-pack-name" />
        <Button title="Save" type="button" view="default-for-pack-name" />
      </div>
    </div>
  );
};

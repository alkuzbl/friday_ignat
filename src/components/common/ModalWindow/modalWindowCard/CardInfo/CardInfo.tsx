import React, { FC } from 'react';

import { useDispatch } from 'react-redux';

import { Button } from '../../../Button';
import { InputF } from '../../../InputForReactHF';

import styles from './style/CardInfo.module.scss';
import { CardInfoPropsType, DataCardFormType } from './types';

import { setInactiveModalWindow } from 'app/app-slice';
import { FormControl } from 'components/common/FormControl';
import { cardInfoValidationSchema } from 'utils/validationSchemes';

export const CardInfo: FC<CardInfoPropsType> = props => {
  const { onSubmit, title } = props;

  const dispatch = useDispatch();

  const onSubmitHandler = (data: DataCardFormType) => {
    onSubmit(data);
  };

  const onClickCancel = () => dispatch(setInactiveModalWindow());

  const onClickDiv = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
    e.stopPropagation();

  return (
    <div className={styles.popup} role="presentation" onClick={onClickDiv}>
      <h3 className={styles.popup__title}>{title}</h3>
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

import React, { useState } from 'react';

import iconEditError from '../../../assets/images/edit_icon-error.svg';
import iconEdit from '../../../assets/images/edit_icon.svg';
import { FormStateType } from '../../../view/Authentication/Login/Login';
import { InputChangeEventType } from '../Input/Input';

import styles from './EditableSpan.module.scss';

type EditableSpanPropsType = {
  value: string;
  onClick?: (value: string) => void;
  name: string;
  onChange: (value: FormStateType) => void;
  placeholder: string;
  iconEditButton?: boolean;
};
export const EditableSpan = (props: EditableSpanPropsType) => {
  const { value, onClick, onChange, name, placeholder, iconEditButton } = props;

  const [edit, setEdit] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const onDblClick = () => setEdit(true);
  const onClickEditMode = () => {
    setEdit(true);
    setError('');
  };

  const exitEditMode = () => {
    setEdit(false);
    onClick && onClick(value);
  };
  // поработать с логикой
  const onChangeInputValue = (e: InputChangeEventType) => {
    if (e.currentTarget.value.length > 29) {
      setError('Допустимая длина имени не более 30-и символов');
    }
    if (e.currentTarget.value.length === 0) {
      setError('Допустимая длина имени не менее 3-х символов');
    }
    const inputName = e.currentTarget.name;
    onChange && onChange({ [inputName]: e.currentTarget.value });
  };

  return (
    <div className={styles.editableSpan}>
      {iconEditButton && (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <span
          className={styles.editableSpan__editModeButton}
          onClick={onClickEditMode}
          role="button"
          tabIndex={0}
        >
          {!edit && <img src={!error ? iconEdit : iconEditError} alt="pen" />}
        </span>
      )}
      <span className={styles.editableSpan__placeholder}>{placeholder}</span>
      {edit ? (
        <input
          className={styles.editableSpan__input}
          type="text"
          autoFocus
          value={value}
          onChange={onChangeInputValue}
          onBlur={exitEditMode}
          name={name}
        />
      ) : (
        <span className={styles.editableSpan__span} onDoubleClick={onDblClick}>
          {value}
        </span>
      )}
    </div>
  );
};

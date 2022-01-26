import React, { FC, useState } from 'react';

import { NavLink } from 'react-router-dom';

import styles from './style/Button.module.scss';
import { ButtonPropsType } from './types';

export const Button: FC<ButtonPropsType> = props => {
  const { title, onClick, type, view, path = '', disabled = false } = props;

  const [active, setActive] = useState<boolean>(false);

  const onClickHandler = () => onClick && onClick();

  const activeStyleForButton = active ? { boxShadow: 'none' } : {};
  const disabledStyle = { pointerEvents: 'none', boxShadow: 'none', opacity: '.5' };

  let classForButton;
  switch (view) {
    case 'transparent':
      classForButton = `${styles.default} ${styles.transparent}`;
      break;
    case 'default-for-packsList':
      classForButton = `${styles.default} ${styles.defaultPacksList}`;
      break;
    case 'delete-for-packsList':
      classForButton = `${styles.default} ${styles.defaultPacksList} ${styles.deletePacksList}`;
      break;
    case 'delete-for-pack-name':
      classForButton = `${styles.default} ${styles.defaultPackName} ${styles.deletePacksList}`;
      break;
    case 'default-for-pack-name':
      classForButton = `${styles.default} ${styles.defaultPackName}`;
      break;
    case 'popup-close':
      classForButton = `${styles.popupClose}`;
      break;
    default:
      classForButton = styles.default;
  }

  return (
    <>
      {type === 'button' && (
        <button
          type="button"
          className={classForButton}
          onClick={onClickHandler}
          onMouseDown={() => setActive(true)}
          onMouseUp={() => setActive(false)}
          style={
            disabled
              ? { ...activeStyleForButton, ...disabledStyle }
              : activeStyleForButton
          }
          disabled={disabled}
        >
          {title}
        </button>
      )}
      {type === 'submit' && (
        <button
          type="submit"
          className={classForButton}
          onClick={onClickHandler}
          onMouseDown={() => setActive(true)}
          onMouseUp={() => setActive(false)}
          style={
            disabled
              ? { ...activeStyleForButton, ...disabledStyle }
              : activeStyleForButton
          }
          disabled={disabled}
        >
          {title}
        </button>
      )}
      {type === 'link' && (
        <NavLink
          to={path}
          className={classForButton}
          onClick={onClickHandler}
          onMouseDown={() => setActive(true)}
          onMouseUp={() => setActive(false)}
          style={
            disabled
              ? { ...activeStyleForButton, ...disabledStyle }
              : activeStyleForButton
          }
        >
          {title}
        </NavLink>
      )}
    </>
  );
};

import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';

import styles from './Button.module.scss';

type ButtonPropsType = {
  title: string;
  onClick?: () => void;
  type: 'submit' | 'button' | 'link';
  view?: 'default' | 'transparent' | 'default-for-packsList' | 'delete-for-packsList';
  path?: string;
  disabled?: boolean;
};
export const Button = (props: ButtonPropsType) => {
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

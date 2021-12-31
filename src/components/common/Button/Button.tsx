import React from 'react';

import styles from './Button.module.scss';

type ButtonPropsType = {
  title: string;
  onClick?: () => void;
  type: 'submit' | 'button';
};
export const Button = (props: ButtonPropsType) => {
  const { title, onClick, type } = props;

  return (
    <>
      {type === 'button' && (
        <button type="button" className={styles.default} onClick={onClick}>
          {title}
        </button>
      )}
      {type === 'submit' && (
        <button type="submit" className={styles.default} onClick={onClick}>
          {title}
        </button>
      )}
    </>
  );
};

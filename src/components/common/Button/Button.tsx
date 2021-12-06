import React from 'react';

import style from './Button.module.scss';

type ButtonPropsType = {
  title?: string;
  link?: string;
  stylesElement?: string;
  fileNameDownload?: string;
  onClick?: () => void;
  viewButton?: 'transparent';
  type?: 'submit' | 'link';
};
export const Button = (props: ButtonPropsType) => {
  const {
    title,
    link,
    stylesElement = '',
    fileNameDownload,
    onClick,
    type,
    viewButton,
  } = props;

  const classesStyles =
    viewButton === 'transparent'
      ? style.transparent
      : `${style.default} ${stylesElement}`;

  return (
    <>
      {type === 'submit' && (
        <button type="submit" className={classesStyles} onClick={onClick}>
          {title}
        </button>
      )}
      {type === 'link' && (
        <a
          className={classesStyles}
          href={link}
          download={fileNameDownload}
          onClick={onClick}
        >
          <span>{title}</span>
        </a>
      )}
    </>
  );
};

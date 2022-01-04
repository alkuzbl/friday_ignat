import React from 'react';
import './Modal.scss';

type ModalWindowPropsType = {
  active: boolean;
  setActive: (active: boolean) => void;
  children: any;
};

export const ModalWindow = (props: ModalWindowPropsType) => {
  const { active, setActive, children } = props;

  return (
    <div
      tabIndex={0}
      role="button"
      className={active ? 'modal active' : 'modal'}
      onClick={() => setActive(false)}
      onKeyPress={e => {
        e.ctrlKey && setActive(false);
      }}
    >
      {children}
    </div>
  );
};

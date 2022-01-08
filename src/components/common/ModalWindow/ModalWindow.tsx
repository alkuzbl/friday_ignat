import React from 'react';
import './Modal.scss';

type ModalWindowPropsType = {
  active: boolean;
  setActive: (active: boolean) => void;
  children?: any;
};

export const ModalWindow = (props: ModalWindowPropsType) => {
  const { active, setActive, children } = props;
  console.log(active);

  return (
    <div
      tabIndex={0}
      role="button"
      className={active ? 'modal active' : 'modal'}
      onClick={() => setActive(false)}
      onKeyPress={e => {
        console.log(e.key);
        e.ctrlKey && setActive(false);
      }}
    >
      {children}
    </div>
  );
};

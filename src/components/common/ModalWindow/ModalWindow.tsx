import React from 'react';
import './Modal.scss';

type ModalWindowPropsType = {
  active: boolean;
  setActive: (active: boolean) => void;
};

export const ModalWindow = (props: ModalWindowPropsType) => {
  const { active, setActive } = props;

  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      fff
    </div>
  );
};

import React from 'react';

import './Modal.scss';
import { useSelector } from 'react-redux';

import { ModalWindowNameType } from '../../../app/app-slice';
import { AppStoreType } from '../../../bll/store';

import { CardDeletingForm } from './modalWindowCard/CardDeletingForm/CardDeletingForm';
import { CardEditingForm } from './modalWindowCard/CardEditingForm/CardEditingForm';
import { FormAddingNewCard } from './modalWindowCard/NewCardAddingForm/FormAddingNewCard';
import { AddNewPack } from './modalWindowPack/AddNewPack/AddNewPack';
import { EditPackName } from './modalWindowPack/EditPackName/EditPackName';
import { PackDeletingForm } from './modalWindowPack/PackDeletingForm/PopupConfirmationDeletePack';

type ModalWindowPropsType = {
  active: boolean;
  setInactive: () => void;
};

export const ModalWindow = (props: ModalWindowPropsType) => {
  const { active, setInactive } = props;
  const nameModalWindow = useSelector<AppStoreType, ModalWindowNameType>(
    state => state.app.modalWindow.modalWindowName,
  );

  return (
    <div
      role="presentation"
      className={active ? 'modal active' : 'modal'}
      onClick={() => setInactive()}
    >
      {nameModalWindow === 'create-pack' && <AddNewPack />}
      {nameModalWindow === 'delete-pack' && <PackDeletingForm />}
      {nameModalWindow === 'edit-pack-name' && <EditPackName />}
      {nameModalWindow === 'create-card' && <FormAddingNewCard />}
      {nameModalWindow === 'edit-card' && <CardEditingForm />}
      {nameModalWindow === 'delete-card' && <CardDeletingForm />}
    </div>
  );
};

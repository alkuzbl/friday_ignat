import React from 'react';

import 'components/common/ModalWindow/style/Modal.scss';
import { useSelector } from 'react-redux';

import { CardDeletingForm, CardEditingForm, FormAddingNewCard } from './modalWindowCard';
import { AddNewPack } from './modalWindowPack/AddNewPack/AddNewPack';
import { EditPackName } from './modalWindowPack/EditPackName/EditPackName';
import { ModalWindowPropsType } from './types';

import { ModalWindowNameType } from 'app/app-slice';
import { AppStoreType } from 'bll/store';
import { PackDeletingForm } from 'components/common/ModalWindow/modalWindowPack';

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

import React from 'react';

import 'components/ModalWindowModal.scss';
import { useSelector } from 'react-redux';

import { ModalWindowNameType } from 'app/types';
import { AppStoreType } from 'bll/store';
import {
  CardDeletingForm,
  CardEditingForm,
  FormAddingNewCard,
} from 'components/ModalWindow/modalWindowCard';
import { LearnForm } from 'components/ModalWindow/modalWindowLearn';
import {
  AddNewPack,
  EditPackName,
  PackDeletingForm,
} from 'components/ModalWindow/modalWindowPack';
import { ModalWindowPropsType } from 'components/ModalWindow/types';
import { PopupEmail } from 'components/PopupEmail';

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
      {nameModalWindow === 'password-recovery-message' && <PopupEmail />}
      {nameModalWindow === 'create-pack' && <AddNewPack />}
      {nameModalWindow === 'delete-pack' && <PackDeletingForm />}
      {nameModalWindow === 'edit-pack-name' && <EditPackName />}
      {nameModalWindow === 'create-card' && <FormAddingNewCard />}
      {nameModalWindow === 'edit-card' && <CardEditingForm />}
      {nameModalWindow === 'delete-card' && <CardDeletingForm />}
      {nameModalWindow === 'learn' && <LearnForm />}
    </div>
  );
};

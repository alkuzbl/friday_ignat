import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { CardInfo } from '../CardInfo';

import { ModalWindowCardType } from 'app/app-slice';
import { addNewCard } from 'bll/card-slice';
import { AppStoreType } from 'bll/store';

export const FormAddingNewCard = () => {
  const { cardsPackId } = useSelector<AppStoreType, ModalWindowCardType>(
    state => state.app.modalWindow.modalWindowData,
  );
  const dispatch = useDispatch();
  const addNewCardHandler = (data: any) => {
    dispatch(addNewCard({ ...data, cardsPack_id: cardsPackId }));
  };
  return <CardInfo onSubmit={addNewCardHandler} title="Add new card" />;
};

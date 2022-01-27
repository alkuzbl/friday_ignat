import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { ModalWindowCardType } from 'app/types';
import { addNewCard } from 'bll/reducers/cardReducer/card-slice';
import { AppStoreType } from 'bll/store';
import { CardInfo } from 'components/ModalWindow/modalWindowCard/CardInfo';

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

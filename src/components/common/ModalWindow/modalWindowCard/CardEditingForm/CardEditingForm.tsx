import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { CardInfo } from '../CardInfo';

import { ModalWindowCardType } from 'app/types';
import { updateCard } from 'bll/reducers/cardReducer/card-slice';
import { AppStoreType } from 'bll/store';
import { DataCardFormType } from 'components/common/ModalWindow/modalWindowCard/CardInfo/types';

export const CardEditingForm = () => {
  const { cardsPackId, cardId } = useSelector<AppStoreType, ModalWindowCardType>(
    state => state.app.modalWindow.modalWindowData,
  );
  const dispatch = useDispatch();

  const updateCardHandler = (data: DataCardFormType) => {
    if (cardsPackId && cardId) {
      dispatch(
        updateCard({
          cardsPack_id: cardsPackId,
          _id: cardId,
          question: data.question,
          answer: data.answer,
        }),
      );
    }
  };

  return <CardInfo onSubmit={updateCardHandler} title="Edit card" />;
};

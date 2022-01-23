import React from 'react';

import { CardInfo } from '../CardInfo/CardInfo';

import { DataCardFormType } from 'components/common/ModalWindow/modalWindowCard/CardInfo/types';

export const CardEditingForm = () => {
  const updateCard = (data: DataCardFormType) => {
    console.log(data);
  };
  return <CardInfo onSubmit={updateCard} />;
};

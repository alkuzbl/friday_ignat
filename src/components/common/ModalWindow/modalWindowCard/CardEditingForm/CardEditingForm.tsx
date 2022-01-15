import React from 'react';

import { CardInfo, DataCardFormType } from '../CardInfo/CardInfo';

export const CardEditingForm = () => {
  const updateCard = (data: DataCardFormType) => {
    console.log(data);
  };
  return <CardInfo onSubmit={updateCard} />;
};

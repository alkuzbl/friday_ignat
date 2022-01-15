import React from 'react';

import { CardInfo, DataCardFormType } from '../CardInfo/CardInfo';

export const FormAddingNewCard = () => {
  const addNewCard = (data: DataCardFormType) => {
    console.log(data);
  };
  return <CardInfo onSubmit={addNewCard} />;
};

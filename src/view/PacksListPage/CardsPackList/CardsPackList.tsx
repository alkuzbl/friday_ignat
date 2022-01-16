import React from 'react';

import { CardsPackTable } from '../../../components/common/CardsPackTable/CardsPackTable';
import { SearchForm } from '../../../components/common/SearchForm/SearchForm';

import styles from './CardsPackList.module.scss';

export const CardsPackList = () => (
  <div className={styles.packs}>
    <h3 className={styles.packs__title}>My packs list</h3>
    <SearchForm />
    <CardsPackTable />
  </div>
);

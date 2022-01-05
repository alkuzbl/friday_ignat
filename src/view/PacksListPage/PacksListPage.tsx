import React from 'react';

import { RedirectionIfNotAuthorized } from '../../hoc/RedirectionIfNotAuthorized';

import { Pack } from './CommonPacksList/PackListItem/Pack/Pack';
import styles from './PacksListPage.module.scss';
import { Pagination } from './Pagination/Pagination';

const PacksListPage = () => (
  <div className={styles.packsListPage}>
    <div className="container">
      <div className={styles.packsListPage__packsList}>
        <Pack />
        <div className={styles.packsListPage__pagination}>
          <Pagination />
        </div>
      </div>
    </div>
  </div>
);

export const PacksListContainer = RedirectionIfNotAuthorized(PacksListPage);

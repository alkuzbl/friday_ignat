import React from 'react';

import styles from '../../ProfilePage/ProfilePage.module.scss';
import { Pack } from '../CardsPackList/PackListItem/Pack/Pack';

export const CardsList = () => (
  <div className={styles.packsListPage}>
    <div className="container">
      <div className={styles.packsListPage__packsList}>
        <Pack />
        <div className={styles.packsListPage__pagination}>
          {/* <Pagination totalCount={1232} selectPage={() => {}} /> */}
        </div>
      </div>
    </div>
  </div>
);

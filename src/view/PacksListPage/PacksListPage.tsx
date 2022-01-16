import React, { useState } from 'react';

import { Button } from '../../components/common/Button';
import { CardsPackTable } from '../../components/common/CardsPackTable/CardsPackTable';
import { DoubleRange } from '../../components/common/DoubleRange/DoubleRange';
import { RedirectionIfNotAuthorized } from '../../hoc/RedirectionIfNotAuthorized';
import styles from '../ProfilePage/ProfilePage.module.scss';

import { ButtonsBoxPacksList } from './ButtonsBoxForPacksList/ButtonsBoxPacksList';
import stylesPack from './CommonPacksList/CardsPackList.module.scss';
import { Pack } from './CommonPacksList/PackListItem/Pack/Pack';
import { PacksListSearch } from './PacksListSearch/PacksListSearch';
import { Pagination } from './Pagination/Pagination';

// в этой компоненте еще одна снизу!!!!!!!!!
const PacksListPage = () => {
  // потом положить в redux, в зависимости что искать нужно
  const [valueRangeSlider, setValueRangeSlider] = useState<number[]>([0, 100]);
  console.log('packListPage');
  const onChangeRange = (value: number[]) => setValueRangeSlider(value);

  return (
    <div className={styles.profilePage}>
      <div className="container">
        <div className={styles.profilePage__wrapper}>
          <div className={styles.profilePage__profile}>
            <div className={styles.profile}>
              <ButtonsBoxPacksList />
            </div>
            <div className={styles.profilePage__range}>
              <h4 className={styles.profilePage__rangeTitle}>Number of cards</h4>
              <DoubleRange onChangeRange={onChangeRange} value={valueRangeSlider} />
            </div>
          </div>
          <div className={styles.profilePage__packsList}>
            <div className={stylesPack.packs}>
              <h3 className={stylesPack.packs__title}>Packs list</h3>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '20px',
                }}
              >
                <div style={{ width: '100%' }}>
                  <PacksListSearch />
                </div>

                <div
                  style={{
                    height: '35px',
                    maxWidth: '185px',
                    width: '100%',
                    marginLeft: '25px',
                  }}
                >
                  <Button title="Add new pack" type="button" view="default" />
                </div>
              </div>

              <CardsPackTable />
            </div>
            <div className={styles.profilePage__pagination}>
              <Pagination totalCount={1232} selectPage={() => {}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const PacksListPageContainer = RedirectionIfNotAuthorized(PacksListPage);
export const PackPage = () => (
  <div className={styles.packsListPage}>
    <div className="container">
      <div className={styles.packsListPage__packsList}>
        <Pack />
        <div className={styles.packsListPage__pagination}>
          <Pagination totalCount={1232} selectPage={() => {}} />
        </div>
      </div>
    </div>
  </div>
);

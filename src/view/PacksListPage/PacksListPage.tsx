import React, { useState } from 'react';

import { Button } from '../../components/common/Button';
import { DoubleRange } from '../../components/common/DoubleRange/DoubleRange';
import { RedirectionIfNotAuthorized } from '../../hoc/RedirectionIfNotAuthorized';
import styles from '../ProfilePage/ProfilePage.module.scss';

import { ButtonsBoxPacksList } from './ButtonsBoxForPacksList/ButtonsBoxPacksList';
import stylesPack from './CommonPacksList/CommonPacksList.module.scss';
import { Pack } from './CommonPacksList/PackListItem/Pack/Pack';
import { PackListItem } from './CommonPacksList/PackListItem/PackListItem';
import { PacksListSearch } from './PacksListSearch/PacksListSearch';
import { Pagination } from './Pagination/Pagination';

const PacksListPage = () => {
  // потом положить в redux, в зависимости что искать нужно
  const [valueRangeSlider, setValueRangeSlider] = useState<number[]>([0, 100]);

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

              <div className={stylesPack.packs__box}>
                <div className={stylesPack.packs__itemsTitle}>
                  <h4 className={stylesPack.packs__itemTitle}>Name</h4>
                  <h4 className={stylesPack.packs__itemTitle}>Cards</h4>
                  <div className={stylesPack.packs__itemSort}>
                    <h4 className={stylesPack.packs__itemTitle}>Last Updated</h4>
                    <span>X</span>
                  </div>
                  <h4 className={stylesPack.packs__itemTitle}>Created by</h4>
                  <h4 className={stylesPack.packs__itemTitle}>Actions</h4>
                </div>
                <PackListItem
                  packId="1"
                  index={1}
                  packName="PackName"
                  userName="Ivanm Ivanov"
                  count={4}
                  date="18.03.2021"
                  myCard
                />
                <PackListItem
                  packId="1"
                  index={2}
                  packName="PackName"
                  userName="Ivan Kozlov"
                  count={112}
                  date="12.03.2021"
                  myCard
                />
                <PackListItem
                  packId="1"
                  index={3}
                  packName="PackName"
                  userName="Ivan Markov"
                  count={44}
                  date="28.05.2021"
                  myCard={false}
                />
                <PackListItem
                  packId="1"
                  index={4}
                  packName="PackName"
                  userName="Ivan Markov"
                  count={44}
                  date="28.05.2021"
                  myCard
                />
                <PackListItem
                  packId="1"
                  index={5}
                  packName="PackName"
                  userName="Ivan Markov"
                  count={44}
                  date="28.05.2021"
                  myCard
                />
                <PackListItem
                  packId="1"
                  index={6}
                  packName="PackName"
                  userName="Ivan Markov"
                  count={44}
                  date="28.05.2021"
                  myCard={false}
                />
                <PackListItem
                  packId="1"
                  index={7}
                  packName="PackName"
                  userName="Ivan Markov"
                  count={44}
                  date="28.05.2021"
                  myCard
                />
              </div>
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

const PackPage = () => (
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
export const PacksListContainer = RedirectionIfNotAuthorized(PackPage);

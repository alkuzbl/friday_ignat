import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setActiveModalWindow } from '../../app/app-slice';
import {
  CardsPackDataForRequestType,
  DataPackType,
  getCardsPack,
  setCardsCount,
  setPage,
  setPageCount,
} from '../../bll/pack-slice';
import { AppStoreType } from '../../bll/store';
import { Button } from '../../components/common/Button';
import { CardsPackTable } from '../../components/common/CardsPackTable/CardsPackTable';
import { DoubleRange } from '../../components/common/DoubleRange/DoubleRange';
import { Pagination } from '../../components/common/Pagination/Pagination';
import { SearchForm } from '../../components/common/SearchForm/SearchForm';
import { RedirectionIfNotAuthorized } from '../../hoc/RedirectionIfNotAuthorized';
import styles from '../ProfilePage/ProfilePage.module.scss';

import { ButtonsBoxPacksList } from './ButtonsBoxForPacksList/ButtonsBoxPacksList';
import stylesPack from './CardsPackList/CardsPackList.module.scss';

const PacksListPage = () => {
  const { minCardsCount, maxCardsCount } = useSelector<AppStoreType, DataPackType>(
    state => state.packs.data,
  );
  const { min, max, packName } = useSelector<AppStoreType, CardsPackDataForRequestType>(
    state => state.packs.cardsPackDataForRequest,
  );
  const dispatch = useDispatch();

  const onChangeRange = (value: number[]) => {
    dispatch(setCardsCount({ min: value[0], max: value[1] }));
  };

  const selectPage = (page: number) => dispatch(setPage({ page }));

  const setPageCountForPacks = (pageCountValue: number) => {
    dispatch(setPageCount({ pageCount: pageCountValue }));
  };

  // разобраться логикой - дублируется код
  const { page, pageCount, cardPacksTotalCount } = useSelector<
    AppStoreType,
    DataPackType
  >(state => state.packs.data);
  const addNewPack = () =>
    dispatch(setActiveModalWindow({ name: 'create-pack', modalWindowData: {} }));
  useEffect(() => {
    dispatch(getCardsPack({ page, pageCount, max, min, packName }));
  }, [pageCount, page, max, min, packName]);

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
              <DoubleRange
                onAfterChange={onChangeRange}
                allowCross={false}
                min={minCardsCount}
                max={maxCardsCount}
                defaultValue={[minCardsCount, maxCardsCount]}
              />
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
                  <SearchForm />
                </div>

                <div
                  style={{
                    height: '35px',
                    maxWidth: '185px',
                    width: '100%',
                    marginLeft: '25px',
                  }}
                >
                  <Button
                    title="Add new pack"
                    type="button"
                    view="default"
                    onClick={addNewPack}
                  />
                </div>
              </div>

              <CardsPackTable />
            </div>
            <div className={styles.profilePage__pagination}>
              <Pagination
                totalCount={cardPacksTotalCount}
                selectPage={selectPage}
                setCountItem={setPageCountForPacks}
                pageCount={pageCount}
                pathToUrl="packs-list/cards-pack/all"
                optionValue={[1, 2, 3, 4, 5, 6, 7, 8]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const PacksListPageContainer = RedirectionIfNotAuthorized(PacksListPage);

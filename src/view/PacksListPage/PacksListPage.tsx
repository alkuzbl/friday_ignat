import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { setActiveModalWindow } from 'app/app-slice';
import {
  CardsPackDataForRequestType,
  DataPackType,
  getCardsPack,
  setCardsPackDataForRequest,
  setPage,
  setPageCount,
} from 'bll/pack-slice';
import { AppStoreType } from 'bll/store';
import { Button, CardsPackTable, Pagination, SearchForm, DoubleRange } from 'components';
import { RedirectionIfNotAuthorized } from 'hoc/RedirectionIfNotAuthorized';
import { ButtonsBoxPacksList } from 'view';
import stylesPack from 'view/PacksListPage/CardsPackList/style/CardsPackList.module.scss';
import styles from 'view/ProfilePage/style/ProfilePage.module.scss';

const PacksListPage = () => {
  const { minCardsCount, maxCardsCount } = useSelector<AppStoreType, DataPackType>(
    state => state.packs.data,
  );
  const { min, max, packName, sortPacks } = useSelector<
    AppStoreType,
    CardsPackDataForRequestType
  >(state => state.packs.cardsPackDataForRequest);
  // в зависимости от параметра URL присваиваю userId для запроса (all | my)
  let userId = useSelector<AppStoreType, string | undefined>(
    state => state.auth.user._id,
  );

  const dispatch = useDispatch();

  const { me } = useParams<'me'>();

  if (me === 'all') {
    userId = undefined;
  }
  //

  const onChangeRange = (value: number[]) => {
    dispatch(setCardsPackDataForRequest({ min: value[0], max: value[1] }));
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

  useEffect(() => {
    dispatch(
      getCardsPack({ page, pageCount, max, min, packName, sortPacks, user_id: userId }),
    );
  }, [pageCount, page, max, min, packName, sortPacks, userId]);

  const addNewPack = () =>
    dispatch(setActiveModalWindow({ name: 'create-pack', modalWindowData: {} }));

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

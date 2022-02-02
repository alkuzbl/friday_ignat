import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { PackageItem } from './PackageItem/PackageItem';

import { setActiveModalWindow } from 'app/app-slice';
import { setSortingByGrade } from 'bll/reducers/cardReducer/card-slice';
import { CardType } from 'bll/reducers/cardReducer/types';
import { AppStoreType } from 'bll/store';
import { Button } from 'components/common/Button';
import { SearchCardsForm } from 'components/SearchForm/SearchCardForm/SearchCardsForm';
import { SortCardsButton } from 'components/SortButton/SortCardsButton/SortCardsButton';
import { SortCardsType } from 'dal/card-api';
import styles from 'view/PacksListPage/CardsPackList/style/CardsPackList.module.scss';

export const PackageCards = () => {
  const dispatch = useDispatch();

  const { packId } = useParams<'packId'>();
  const { userId } = useParams<'userId'>();

  const cards = useSelector<AppStoreType, CardType[]>(state => state.cards.data.cards);

  const title = useSelector<AppStoreType, string | undefined>(
    state => state.packs.data.cardPacks.find(pack => pack._id === packId)?.name,
  );
  const myId = useSelector<AppStoreType, string>(state => state.auth.user._id);

  const isMyCards = myId === userId;

  const sortByGrade = (value: SortCardsType) => {
    dispatch(setSortingByGrade(value));
  };

  const onAddCardButtonClick = () => {
    if (packId) {
      dispatch(
        setActiveModalWindow({
          name: 'create-card',
          modalWindowData: { cardsPackId: packId },
        }),
      );
    }
  };

  const styleForCardsList = isMyCards
    ? `${styles.packs__itemsTitle} ${styles.pack__itemsTitle}`
    : `${styles.packs__itemsTitle} ${styles.packCardsAll__itemsTitle}`;

  return (
    <div className={styles.packs} style={{ paddingTop: '40px' }}>
      <h3 className={styles.packs__title}>{title || ''}</h3>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          height: '35px',
          marginBottom: '40px',
        }}
      >
        <div style={{ marginRight: '30px', width: '100%' }}>
          <SearchCardsForm searchParam="question" />
        </div>
        <div style={{ marginRight: '30px', width: '100%' }}>
          <SearchCardsForm searchParam="answer" />
        </div>
        {isMyCards && (
          <Button
            title="Add new card"
            type="button"
            view="default"
            onClick={onAddCardButtonClick}
          />
        )}
      </div>

      <div className={styles.packs__box}>
        <div className={styleForCardsList}>
          <h4>Question</h4>
          <h4>Answer</h4>
          <h4>Last Updated</h4>
          <div className={styles.packs__itemSort}>
            <h4>Grade</h4>
            <SortCardsButton onClick={sortByGrade} />
          </div>
          {isMyCards && <h4>Actions</h4>}
        </div>
        {cards.map((card, i) => (
          <PackageItem
            key={card._id}
            cardId={card._id}
            packId={packId}
            isMyCards={isMyCards}
            question={card.question}
            answer={card.answer}
            date={card.created.slice(0, 10).split('-').reverse().join('.')}
            grade={card.grade}
            index={i}
          />
        ))}
      </div>
    </div>
  );
};

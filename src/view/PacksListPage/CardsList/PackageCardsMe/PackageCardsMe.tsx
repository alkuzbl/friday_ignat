import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { addNewCard, CardType } from '../../../../bll/card-slice';
import { AppStoreType } from '../../../../bll/store';
import { Button } from '../../../../components/common/Button';
import { SearchForm } from '../../../../components/common/SearchForm/SearchForm';
import { SortButton } from '../../../../components/common/SortButton/SortButton';
import styles from '../../CardsPackList/CardsPackList.module.scss';

import { PackageItemForMe } from './PackageItemForMe/PackageItemForMe';

export const PackageCardsMe = () => {
  const cards = useSelector<AppStoreType, CardType[]>(state => state.cards.data.cards);
  const { packId } = useParams<'packId'>();
  const dispatch = useDispatch();
  const title = 'Pack name';

  const onAddCardButtonClick = () => {
    dispatch(
      addNewCard({
        cardsPack_id: packId as string,
        question: 'What?',
        answer: 'Nothing',
      }),
    );
  };

  return (
    <div className={styles.packs}>
      <h3 className={styles.packs__title}>{title}</h3>
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
            title="Add new card"
            type="button"
            view="default"
            onClick={onAddCardButtonClick}
          />
        </div>
      </div>

      <div className={styles.packs__box}>
        <div className={`${styles.packs__itemsTitle} ${styles.pack__itemsTitle}`}>
          <h4>Question</h4>
          <h4>Answer</h4>
          <div className={styles.packs__itemSort}>
            <h4>Last Updated</h4>
            <SortButton />
          </div>
          <h4>Grade</h4>
          <h4>Actions</h4>
        </div>
        {cards.map((card, i) => (
          <PackageItemForMe
            key={card._id}
            cardId={card._id}
            question={card.question}
            answer={card.answer}
            date={card.created.slice(0, 10).split('-').reverse().join('.')}
            rating={card.rating}
            index={i}
          />
        ))}
      </div>
    </div>
  );
};

import React from 'react';

import { useSelector } from 'react-redux';

import { CardType } from '../../../../bll/card-slice';
import { AppStoreType } from '../../../../bll/store';
import { SearchForm } from '../../../../components/common/SearchForm/SearchForm';
import { SortButton } from '../../../../components/common/SortButton/SortButton';
import styles from '../../CardsPackList/CardsPackList.module.scss';

import { PackageItemForAll } from './PackageItemForAll/PackageItemForAll';

export const PackageCardsAll = () => {
  const cards = useSelector<AppStoreType, CardType[]>(state => state.cards.data.cards);
  const title = 'PackageCardsMe name';

  return (
    <div className={styles.packs}>
      <h3 className={styles.packs__title}>{title}</h3>

      <div style={{ width: '100%' }}>
        <SearchForm />
      </div>

      <div className={styles.packs__box}>
        <div className={`${styles.packs__itemsTitle} ${styles.packCardsAll__itemsTitle}`}>
          <h4>Question</h4>
          <h4>Answer</h4>
          <div className={styles.packs__itemSort}>
            <h4>Last Updated</h4>
            <SortButton />
          </div>
          <h4>Grade</h4>
        </div>
        {cards.map((card, i) => (
          <PackageItemForAll
            key={card._id}
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

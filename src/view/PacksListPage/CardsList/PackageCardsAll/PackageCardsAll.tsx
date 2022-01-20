import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { CardType, setSortingByGrade } from '../../../../bll/card-slice';
import { AppStoreType } from '../../../../bll/store';
import { SortCardsButton } from '../../../../components/common/SortButton/SortCardsButton';
import { SortCardsType } from '../../../../dal/card-api';
import styles from '../../CardsPackList/CardsPackList.module.scss';

import { PackageItemForAll } from './PackageItemForAll/PackageItemForAll';

export const PackageCardsAll = () => {
  const cards = useSelector<AppStoreType, CardType[]>(state => state.cards.data.cards);
  const dispatch = useDispatch();
  const title = 'PackageCardsMe name';

  const sortByGrade = (value: SortCardsType) => {
    dispatch(setSortingByGrade(value));
  };
  return (
    <div className={styles.packs}>
      <h3 className={styles.packs__title}>{title}</h3>

      <div className={styles.packs__box}>
        <div className={`${styles.packs__itemsTitle} ${styles.packCardsAll__itemsTitle}`}>
          <h4>Question</h4>
          <h4>Answer</h4>
          <h4>Last Updated</h4>
          <div className={styles.packs__itemSort}>
            <h4>Grade</h4>
            <SortCardsButton onClick={sortByGrade} />
          </div>
        </div>
        {cards.map((card, i) => (
          <PackageItemForAll
            key={card._id}
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

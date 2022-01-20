import React from 'react';

import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { setActiveModalWindow } from '../../../../../app/app-slice';
import { Button } from '../../../../../components/common/Button';
import { Grade } from '../../../../../components/common/Grade/Grade';
import styles from '../../../CardsPackList/CardsPackList.module.scss';

type PackageItemForMePropsType = {
  question: string;
  answer: string;
  date: string;
  rating: number;
  index: number;
  cardId: string;
};
export const PackageItemForMe = (props: PackageItemForMePropsType) => {
  const { question, answer, date, rating, index, cardId } = props;
  const dispatch = useDispatch();
  const { packId } = useParams<'packId'>();

  const onClickDelete = () => {
    dispatch(
      setActiveModalWindow({
        name: 'delete-card',
        modalWindowData: { cardsPackId: packId as string, cardId, question },
      }),
    );
  };
  const onClickEdit = () => {
    dispatch(
      setActiveModalWindow({
        name: 'edit-card',
        modalWindowData: { _id: cardId, question, answer },
      }),
    );
  };

  const styleItem =
    index % 2 === 0
      ? `${styles.packs__item} ${styles.pack__item}`
      : `${styles.packs__item} ${styles.pack__item} ${styles.dark}`;

  return (
    <div className={styleItem}>
      <p className={styles.packs__itemContent}>{question}</p>
      <p className={styles.packs__itemContent}>{answer}</p>
      <p className={styles.packs__itemContent}>{date}</p>
      <div className={styles.packs__itemContent}>
        <Grade score={rating} />
      </div>

      <div className={`${styles.packs__itemButtons} ${styles.pack__itemButtons}`}>
        <Button
          title="Delete"
          type="button"
          view="delete-for-packsList"
          onClick={onClickDelete}
        />
        <Button
          title="Edit"
          type="button"
          view="default-for-packsList"
          onClick={onClickEdit}
        />
      </div>
    </div>
  );
};

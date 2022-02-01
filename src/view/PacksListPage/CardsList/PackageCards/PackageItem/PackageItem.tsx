import React, { FC } from 'react';

import { useDispatch } from 'react-redux';

import { setActiveModalWindow } from 'app/app-slice';
import { Button, Grade } from 'components';
import { PackageItemForMePropsType } from 'view/PacksListPage/CardsList/PackageCards/PackageItem/types';
import styles from 'view/PacksListPage/CardsPackList/style/CardsPackList.module.scss';

export const PackageItem: FC<PackageItemForMePropsType> = props => {
  const { question, answer, date, grade, index, cardId, packId, isMyCards } = props;

  const dispatch = useDispatch();

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
        modalWindowData: { cardsPackId: packId, cardId, question, answer },
      }),
    );
  };

  const styleItemMy =
    index % 2 === 0
      ? `${styles.packs__item} ${styles.pack__item}`
      : `${styles.packs__item} ${styles.pack__item} ${styles.dark}`;

  const styleItemAll =
    index % 2 === 0
      ? `${styles.packs__item} ${styles.packCardsAll__item}`
      : `${styles.packs__item} ${styles.packCardsAll__item} ${styles.dark}`;

  const styleItemForCard = isMyCards ? styleItemMy : styleItemAll;

  return (
    <div className={styleItemForCard}>
      <p className={styles.packs__itemContent}>{question}</p>
      <p className={styles.packs__itemContent}>{answer}</p>
      <p className={styles.packs__itemContent}>{date}</p>
      <div className={styles.packs__itemContent}>
        <Grade score={grade} />
      </div>
      {isMyCards && (
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
      )}
    </div>
  );
};

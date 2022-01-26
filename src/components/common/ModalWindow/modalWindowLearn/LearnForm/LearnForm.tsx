import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  ModalWindowPackType,
  setInactiveModalWindow,
} from '../../../../../app/app-slice';
import { CardType, getAllCards, putCardGrade } from '../../../../../bll/card-slice';
import { getRandomCard } from '../../../../../utils/smartRandom';
import { Button } from '../../../Button';
import { RadioButtons } from '../../../RadioButtons';
import styles from '../../modalWindowPack/PackDeletingForm/style/PackDeletingForm.module.scss';

import { AppStoreType } from 'bll/store';

const grades = [
  'Did not know',
  'Forgot',
  'A lot of thought',
  'Confused',
  'Knew the answer',
];

export const LearnForm = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [first, setFirst] = useState<boolean>(true);
  const [value, onChangeOption] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [card, setCard] = useState<CardType>();
  const dispatch = useDispatch();
  const cards = useSelector<AppStoreType, CardType[]>(state => state.cards.data.cards);
  const { _id, name } = useSelector<AppStoreType, ModalWindowPackType>(
    state => state.app.modalWindow.modalWindowData,
  );

  useEffect(() => {
    if (first && _id) {
      dispatch(getAllCards({ cardsPack_id: _id }));
      setFirst(false);
    }
    if (cards.length > 0) setCard(getRandomCard(cards));
  }, [dispatch, _id, cards, first]);

  const onNext = () => {
    setIsChecked(false);

    if (cards.length > 0 && card) {
      dispatch(putCardGrade({ card_id: card._id, grade: value }));
      setCard(getRandomCard(cards));
    }
  };

  const cancel = () => dispatch(setInactiveModalWindow());

  const onClickDiv = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
    e.stopPropagation();
  return (
    <div role="presentation" className={styles.popup} onClick={onClickDiv}>
      <div className={styles.popup__titleBox}>
        <h3 className={styles.popup__title}>Learn «{name}»</h3>
        <Button title="X" type="button" view="popup-close" onClick={cancel} />
      </div>

      {card ? (
        <div>
          <p className={styles.popup__content}>Answer the question</p>
          <p>{card.question}</p>
          <div>
            <Button
              title="Check answer"
              type="button"
              onClick={() => setIsChecked(true)}
              view="default"
            />
          </div>
          {isChecked && (
            <>
              <div>{card.answer}</div>
              <RadioButtons
                name="radio"
                options={grades}
                value={value}
                onChangeOption={onChangeOption}
              />
              <div style={{ display: 'flex' }}>
                <Button title="Cancel" type="button" onClick={cancel} view="default" />
                <Button title="Next" type="button" onClick={onNext} view="default" />
              </div>
            </>
          )}
        </div>
      ) : (
        <div>No cards =(</div>
      )}
    </div>
  );
};

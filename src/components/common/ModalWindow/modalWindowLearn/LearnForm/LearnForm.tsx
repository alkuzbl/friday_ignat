import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setInactiveModalWindow } from 'app/app-slice';
import { ModalWindowPackType } from 'app/types';
import { CardType, getAllCards, putCardGrade } from 'bll/reducers/cardReducer/card-slice';
import { AppStoreType } from 'bll/store';
import { Button } from 'components/common/Button';
import { LearnQuestion } from 'components/common/ModalWindow/modalWindowLearn/LearnForm/LearnQuestion';
import { RadioButtons } from 'components/common/RadioButtons';
import { GradesType } from 'components/common/RadioButtons/types';
import { Nullabell } from 'types/Nullabel';
import { getRandomCard } from 'utils/smartRandom';

const grades: GradesType[] = [
  { id: 1, name: 'Did not know' },
  { id: 2, name: 'Forgot' },
  { id: 3, name: 'A lot of thought' },
  { id: 4, name: 'Confused' },
  { id: 5, name: 'Knew the answer' },
];

enum GradesEnum {
  'Did not know' = 1,
  'Forgot' = 2,
  'A lot of thought' = 3,
  'Confused' = 4,
  'Knew the answer' = 5,
}

export const LearnForm = () => {
  const dispatch = useDispatch();

  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [first, setFirst] = useState<boolean>(true);
  const [value, onChangeOption] = useState<GradesEnum>(GradesEnum['Did not know']);
  const [card, setCard] = useState<Nullabell<CardType>>(null);

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

  const handleClickChecked = () => setIsChecked(true);

  const onClickDiv = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
    e.stopPropagation();

  return (
    <div
      role="presentation"
      onClick={onClickDiv}
      style={{
        padding: '30px 30px 40px',
        maxWidth: '400px',
        borderRadius: '5px',
        border: '1px solid #EDF0F6',
        backgroundColor: ' #ffffff',
      }}
    >
      {!isChecked ? (
        <LearnQuestion
          name={name || ''}
          card={card}
          onClickCancel={cancel}
          onClickChecked={handleClickChecked}
        />
      ) : (
        <div>
          <div style={{ fontWeight: 'bold' }}>{card && card.answer}</div>
          <RadioButtons options={grades} value={value} onChangeOption={onChangeOption} />
          <div style={{ display: 'flex' }}>
            <Button title="Cancel" type="button" onClick={cancel} view="default" />
            <Button title="Next" type="button" onClick={onNext} view="default" />
          </div>
        </div>
      )}
    </div>
  );
};

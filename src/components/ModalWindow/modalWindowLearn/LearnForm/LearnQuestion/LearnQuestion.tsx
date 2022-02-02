import React, { FC } from 'react';

import { CardType } from 'bll/reducers/cardReducer/types';
import { Button } from 'components/common/Button';
import { Nullabell } from 'types/Nullabel';

type LearnQuestionPropsType = {
  name: string;
  card: Nullabell<CardType>;
  onClickCancel: () => void;
  onClickChecked: () => void;
};
export const LearnQuestion: FC<LearnQuestionPropsType> = props => {
  const { card, name, onClickCancel, onClickChecked } = props;
  return (
    <div>
      <div>
        <h3
          style={{
            marginBottom: '30px',
            fontWeight: 600,
            fontSize: '22px',
            lineHeight: '33px',
            color: '#2D2E46',
          }}
        >
          Learn «{name}»
        </h3>
      </div>
      {!card ? (
        <div>No cards 🙁</div>
      ) : (
        <div>
          <p
            style={{
              marginBottom: '60px',
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '24px',
              color: '#2D2E46',
            }}
          >
            Question:{' '}
            <span
              style={{
                fontWeight: 400,
              }}
            >
              {card.question}
            </span>
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <Button
                title="Cancel"
                type="button"
                onClick={onClickCancel}
                view="transparent"
              />
            </div>
            <div>
              <Button
                title="Show answer"
                type="button"
                onClick={onClickChecked}
                view="default"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

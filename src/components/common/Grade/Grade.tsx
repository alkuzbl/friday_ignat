import React from 'react';

import styles from './Grade.module.scss';

type GradePropsType = {
  score: number;
};
export const Grade = (props: GradePropsType) => {
  const { score } = props;
  const starsArr = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

  return (
    <div className={styles.stars}>
      {starsArr.map(s => (
        <span key={s.id} className={styles.stars__item}>
          <svg
            width="12"
            height="11"
            viewBox="0 0 12 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z"
              fill={score >= s.id ? '#21268F' : '#D7D8EF'}
            />
          </svg>
        </span>
      ))}
    </div>
  );
};

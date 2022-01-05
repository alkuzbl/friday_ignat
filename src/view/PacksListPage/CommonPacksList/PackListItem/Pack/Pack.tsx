import React from 'react';

import { PacksListSearch } from '../../../PacksListSearch/PacksListSearch';
import styles from '../../CommonPacksList.module.scss';

import { PackItem } from './PackItem/PackItem';

export const Pack = () => {
  // потом удалить когда будет редакс
  const title = 'Pack name';

  return (
    <div className={styles.packs}>
      <h3 className={styles.packs__title}>{title}</h3>
      <PacksListSearch />
      <div className={styles.packs__box}>
        <div className={`${styles.packs__itemsTitle} ${styles.pack__itemsTitle}`}>
          <h4>Question</h4>
          <h4>Answer</h4>
          <div className={styles.packs__itemSort}>
            <h4>Last Updated</h4>
            <span>X</span>
          </div>
          <h4>Grade</h4>
          <h4>Actions</h4>
        </div>
        {/* должен быть массив из редакса */}
        <PackItem
          columnOne={'How "This" works in JavaScript?'}
          columnTwo={'This is how "This" works in JavaScript'}
          columnThree="18.03.2021"
          columnFour={3}
          index={1}
        />
        <PackItem
          columnOne={'How "This" works in JavaScript?'}
          columnTwo={'This is how "This" works in JavaScript'}
          columnThree="18.03.2021"
          columnFour={3}
          index={2}
        />
        <PackItem
          columnOne={'How "This" works in JavaScript?'}
          columnTwo={'This is how "This" works in JavaScript'}
          columnThree="18.03.2021"
          columnFour={3}
          index={3}
        />
        <PackItem
          columnOne={'How "This" works in JavaScript?'}
          columnTwo={'This is how "This" works in JavaScript'}
          columnThree="18.03.2021"
          columnFour={3}
          index={4}
        />
        <PackItem
          columnOne={'How "This" works in JavaScript?'}
          columnTwo={'This is how "This" works in JavaScript'}
          columnThree="18.03.2021"
          columnFour={3}
          index={5}
        />
        <PackItem
          columnOne={'How "This" works in JavaScript?'}
          columnTwo={'This is how "This" works in JavaScript'}
          columnThree="18.03.2021"
          columnFour={3}
          index={6}
        />
        <PackItem
          columnOne={'How "This" works in JavaScript?'}
          columnTwo={'This is how "This" works in JavaScript'}
          columnThree="18.03.2021"
          columnFour={3}
          index={7}
        />
        <PackItem
          columnOne={'How "This" works in JavaScript?'}
          columnTwo={'This is how "This" works in JavaScript'}
          columnThree="18.03.2021"
          columnFour={3}
          index={8}
        />
      </div>
    </div>
  );
};

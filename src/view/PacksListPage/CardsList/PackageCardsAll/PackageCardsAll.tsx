import React from 'react';

import { SearchForm } from '../../../../components/common/SearchForm/SearchForm';
import styles from '../../CardsPackList/CardsPackList.module.scss';

import { PackageItemForAll } from './PackageItemForAll/PackageItemForAll';

export const PackageCardsAll = () => {
  // потом удалить когда будет редакс
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
            <span>X</span>
          </div>
          <h4>Grade</h4>
        </div>
        {/* должен быть массив из редакса */}
        <PackageItemForAll
          columnOne={'How "This" works in JavaScript?'}
          columnTwo={'This is how "This" works in JavaScript'}
          columnThree="18.03.2021"
          columnFour={3}
          index={1}
        />
        <PackageItemForAll
          columnOne={'How "This" works in JavaScript?'}
          columnTwo={'This is how "This" works in JavaScript'}
          columnThree="18.03.2021"
          columnFour={4}
          index={2}
        />
        <PackageItemForAll
          columnOne={'How "This" works in JavaScript?'}
          columnTwo={'This is how "This" works in JavaScript'}
          columnThree="18.03.2021"
          columnFour={1}
          index={3}
        />
        <PackageItemForAll
          columnOne={'How "This" works in JavaScript?'}
          columnTwo={'This is how "This" works in JavaScript'}
          columnThree="18.03.2021"
          columnFour={5}
          index={4}
        />
        <PackageItemForAll
          columnOne={'How "This" works in JavaScript?'}
          columnTwo={'This is how "This" works in JavaScript'}
          columnThree="18.03.2021"
          columnFour={3}
          index={5}
        />
        <PackageItemForAll
          columnOne={'How "This" works in JavaScript?'}
          columnTwo={'This is how "This" works in JavaScript'}
          columnThree="18.03.2021"
          columnFour={3}
          index={6}
        />
        <PackageItemForAll
          columnOne={'How "This" works in JavaScript?'}
          columnTwo={'This is how "This" works in JavaScript'}
          columnThree="18.03.2021"
          columnFour={2}
          index={7}
        />
        <PackageItemForAll
          columnOne={'How "This" works in JavaScript?'}
          columnTwo={'This is how "This" works in JavaScript'}
          columnThree="18.03.2021"
          columnFour={4}
          index={8}
        />
      </div>
    </div>
  );
};

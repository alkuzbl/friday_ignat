import React from 'react';

import { Button } from '../../../../components/common/Button';
import { SearchForm } from '../../../../components/common/SearchForm/SearchForm';
import { SortButton } from '../../../../components/common/SortButton/SortButton';
import styles from '../../CardsPackList/CardsPackList.module.scss';

import { PackageItemForMe } from './PackageItemForMe/PackageItemForMe';

export const PackageCardsMe = () => {
  // потом удалить когда будет редакс
  const title = 'PackageCardsMe name';

  return (
    <div className={styles.packs}>
      <h3 className={styles.packs__title}>{title}</h3>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '20px',
        }}
      >
        <div style={{ width: '100%' }}>
          <SearchForm />
        </div>

        <div
          style={{
            height: '35px',
            maxWidth: '185px',
            width: '100%',
            marginLeft: '25px',
          }}
        >
          <Button title="Add new card" type="button" view="default" />
        </div>
      </div>

      <div className={styles.packs__box}>
        <div className={`${styles.packs__itemsTitle} ${styles.pack__itemsTitle}`}>
          <h4>Question</h4>
          <h4>Answer</h4>
          <div className={styles.packs__itemSort}>
            <h4>Last Updated</h4>
            <SortButton />
          </div>
          <h4>Grade</h4>
          <h4>Actions</h4>
        </div>
        {/* должен быть массив из редакса */}
        <PackageItemForMe
          columnOne={'How "This" works in JavaScript?'}
          columnTwo={'This is how "This" works in JavaScript'}
          columnThree="18.03.2021"
          columnFour={3}
          index={1}
        />
        <PackageItemForMe
          columnOne={'How "This" works in JavaScript?'}
          columnTwo={'This is how "This" works in JavaScript'}
          columnThree="18.03.2021"
          columnFour={4}
          index={2}
        />
        <PackageItemForMe
          columnOne={'How "This" works in JavaScript?'}
          columnTwo={'This is how "This" works in JavaScript'}
          columnThree="18.03.2021"
          columnFour={1}
          index={3}
        />
        <PackageItemForMe
          columnOne={'How "This" works in JavaScript?'}
          columnTwo={'This is how "This" works in JavaScript'}
          columnThree="18.03.2021"
          columnFour={5}
          index={4}
        />
        <PackageItemForMe
          columnOne={'How "This" works in JavaScript?'}
          columnTwo={'This is how "This" works in JavaScript'}
          columnThree="18.03.2021"
          columnFour={3}
          index={5}
        />
        <PackageItemForMe
          columnOne={'How "This" works in JavaScript?'}
          columnTwo={'This is how "This" works in JavaScript'}
          columnThree="18.03.2021"
          columnFour={3}
          index={6}
        />
        <PackageItemForMe
          columnOne={'How "This" works in JavaScript?'}
          columnTwo={'This is how "This" works in JavaScript'}
          columnThree="18.03.2021"
          columnFour={2}
          index={7}
        />
        <PackageItemForMe
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

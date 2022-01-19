import React, { useEffect, useState } from 'react';

import styles from '../../../view/ProfilePage/ProfilePage.module.scss';
import { Input, InputChangeEventType } from '../Input/Input';

export const SearchForm = () => {
  const [value, setValue] = useState('');

  useEffect(() => {
    setTimeout(() => {
      console.log(value);
    }, 2000);
  }, []);
  const onChangeSearch = (e: InputChangeEventType) => {
    setValue(e.currentTarget.value);
    console.log(value);
  };

  return (
    <div className={styles.packsList__search}>
      <span className={styles.packsList__searchIcon} />
      {/* //это обычный инпут = можно использывать везде */}

      <Input
        type="text"
        onChange={onChangeSearch}
        value={value}
        placeholder="Search..."
      />
    </div>
  );
};

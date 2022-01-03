import React, { useState } from 'react';

import { Input, InputChangeEventType } from '../../../components/common/Input/Input';
import styles from '../../ProfilePage/ProfilePage.module.scss';

export const PacksListSearch = () => {
  const [value, setValue] = useState('');

  const onChangeSearch = (e: InputChangeEventType) => {
    setValue(e.currentTarget.value);
  };

  return (
    <div className={styles.packsList__search}>
      <span className={styles.packsList__searchIcon} />
      <Input
        type="text"
        onChange={onChangeSearch}
        value={value}
        placeholder="Search..."
      />
    </div>
  );
};

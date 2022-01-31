import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import { setCardsPackDataForRequest } from 'bll/reducers/packReducer/pack-slice';
import { Input } from 'components/common/Input/Input';
import { InputChangeEventType } from 'components/common/Input/types';
import useDebounce from 'utils/useDebounce';
import styles from 'view/ProfilePage/style/ProfilePage.module.scss';

export const SearchForm = () => {
  const [value, setValue] = useState<string>('');

  const dispatch = useDispatch();

  const debouncedValue: string = useDebounce(value, 500);

  const onChangeSearch = (e: InputChangeEventType) => {
    setValue(e.currentTarget.value);
  };

  useEffect(() => {
    if (debouncedValue) {
      dispatch(setCardsPackDataForRequest({ packName: debouncedValue }));
    } else {
      dispatch(setCardsPackDataForRequest({ packName: undefined }));
    }
  }, [debouncedValue]);

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

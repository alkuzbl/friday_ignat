import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import { setCardsPackDataForRequest } from 'bll/pack-slice';
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

  const onBlurHandler = () => setValue('');

  useEffect(() => {
    if (debouncedValue) {
      dispatch(setCardsPackDataForRequest({ packName: debouncedValue }));
    } else {
      // чтобы запрос не шел вида .../?packName=
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
        onBlur={onBlurHandler}
      />
    </div>
  );
};

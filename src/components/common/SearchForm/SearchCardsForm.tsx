import React, { FC, useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import { setCardAnswerSearch, setCardQuestionSearch } from '../../../bll/card-slice';
import useDebounce from '../../../utils/useDebounce';
import styles from '../../../view/ProfilePage/ProfilePage.module.scss';
import { Input, InputChangeEventType } from '../Input/Input';

type SearchCardsFormPropsType = {
  searchParam: 'question' | 'answer';
};

export const SearchCardsForm: FC<SearchCardsFormPropsType> = ({ searchParam }) => {
  const [value, setValue] = useState<string>('');
  const debouncedValue: string = useDebounce(value, 500);

  const dispatch = useDispatch();
  const onChangeSearch = (e: InputChangeEventType) => {
    setValue(e.currentTarget.value);
  };

  useEffect(() => {
    if (searchParam === 'question') {
      if (debouncedValue) {
        dispatch(setCardQuestionSearch(debouncedValue));
      } else {
        dispatch(setCardQuestionSearch(undefined));
      }
    }
    if (searchParam === 'answer') {
      if (debouncedValue) {
        dispatch(setCardAnswerSearch(debouncedValue));
      } else {
        dispatch(setCardAnswerSearch(undefined));
      }
    }
  }, [debouncedValue]);
  return (
    <div className={styles.packsList__search}>
      <span className={styles.packsList__searchIcon} />
      <Input
        type="text"
        onChange={onChangeSearch}
        value={value}
        placeholder={`Search by ${searchParam}`}
      />
    </div>
  );
};

import React, { FC, useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import { setCardAnswerSearch, setCardQuestionSearch } from 'bll/card-slice';
import { Input } from 'components/common/Input/Input';
import { InputChangeEventType } from 'components/common/Input/types';
import useDebounce from 'utils/useDebounce';
import styles from 'view/ProfilePage/style/ProfilePage.module.scss';

type SearchCardsFormPropsType = {
  searchParam: 'question' | 'answer';
};

export const SearchCardsForm: FC<SearchCardsFormPropsType> = ({ searchParam }) => {
  const [value, setValue] = useState<string>('');

  const dispatch = useDispatch();

  const debouncedValue: string = useDebounce(value, 500);

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

import React from 'react';

import { useDispatch } from 'react-redux';

import { setActiveModalWindow } from '../../../../app/app-slice';

import { Button } from 'components/common/Button';
import styles from 'view/ProfilePage/style/ProfilePage.module.scss';

type ActionButtonPropsType = {
  packId: string;
  packName: string;
};

export const ActionButton = (props: ActionButtonPropsType) => {
  const { packId, packName } = props;
  const dispatch = useDispatch();
  const onClickLearn = () => {
    dispatch(
      setActiveModalWindow({
        name: 'learn',
        modalWindowData: { _id: packId, name: packName },
      }),
    );
  };
  return (
    <div className={styles.packsList__itemButtons}>
      <Button
        title="Learn"
        type="button"
        view="default-for-packsList"
        onClick={onClickLearn}
      />
    </div>
  );
};

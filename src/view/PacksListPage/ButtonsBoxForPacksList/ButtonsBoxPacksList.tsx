import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { AppStoreType } from '../../../bll/store';

import styles from './ButtonsBoxPacksList.module.scss';

export const ButtonsBoxPacksList = () => {
  const myId = useSelector<AppStoreType, string>(state => state.auth.user._id);
  const pageCount = useSelector<AppStoreType, number>(
    state => state.packs.data.pageCount,
  );

  const dispatch = useDispatch();

  const getMyCards = () => {
    console.log(dispatch, myId, pageCount);
    // dispatch нужных параметров
  };
  const getAllCards = () => {
    // dispatch нужных параметров
  };
  const setActiveStylesForMenu = (isActive: {}) =>
    isActive ? `${styles.buttonBox__btn} ${styles.active}` : styles.buttonBox__btn;

  return (
    <div className={styles.buttonBox}>
      <h3 className={styles.buttonBox__title}>Show packs cards</h3>
      <div className={styles.buttonBox__inner}>
        <NavLink
          className={({ isActive }) => setActiveStylesForMenu(isActive)}
          type="button"
          onClick={getMyCards}
          to="/packs-list/cards-pack/my"
        >
          My
        </NavLink>
        <NavLink
          className={({ isActive }) => setActiveStylesForMenu(isActive)}
          type="button"
          onClick={getAllCards}
          to="/packs-list/cards-pack/all"
        >
          All
        </NavLink>
      </div>
    </div>
  );
};

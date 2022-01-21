import React from 'react';

import { NavLink } from 'react-router-dom';

import styles from './ButtonsBoxPacksList.module.scss';

export const ButtonsBoxPacksList = () => {
  const setActiveStylesForMenu = (isActive: {}) =>
    isActive ? `${styles.buttonBox__btn} ${styles.active}` : styles.buttonBox__btn;

  return (
    <div className={styles.buttonBox}>
      <h3 className={styles.buttonBox__title}>Show packs cards</h3>
      <div className={styles.buttonBox__inner}>
        <NavLink
          className={({ isActive }) => setActiveStylesForMenu(isActive)}
          type="button"
          to="/packs-list/cards-pack/my/1"
        >
          My
        </NavLink>
        <NavLink
          className={({ isActive }) => setActiveStylesForMenu(isActive)}
          type="button"
          to="/packs-list/cards-pack/all/1"
        >
          All
        </NavLink>
      </div>
    </div>
  );
};

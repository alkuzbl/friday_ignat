import React from 'react';

import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import iconCard from '../../../assets/images/card.svg';
import iconProfile from '../../../assets/images/profile.svg';
import { AppStoreType } from '../../../bll/store';
import styles from '../Header.module.scss';

const setActiveStylesForMenu = (isActive: {}) =>
  isActive ? `${styles.navbar__item} ${styles.active}` : styles.navbar__item;

export const NavBar = () => {
  const userId = useSelector<AppStoreType, string>(state => state.auth.user._id);
  return (
    <div className={styles.navbar}>
      <NavLink
        to="/packs-list"
        className={({ isActive }) => setActiveStylesForMenu(isActive)}
      >
        <img src={iconCard} alt="Packs list" />
        <p>Packs List</p>
      </NavLink>
      <NavLink
        to={`/profile/${userId}/pack-page/1`}
        className={({ isActive }) => setActiveStylesForMenu(isActive)}
      >
        <img src={iconProfile} alt="ProfilePage" />
        <p>ProfilePage</p>
      </NavLink>
    </div>
  );
};

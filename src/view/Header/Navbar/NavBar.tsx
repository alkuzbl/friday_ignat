import React from 'react';

import { NavLink } from 'react-router-dom';

import iconCard from '../../../assets/images/card.svg';
import iconProfile from '../../../assets/images/profile.svg';
import styles from '../Header.module.scss';

const setActiveStylesForMenu = (isActive: {}) =>
  isActive ? `${styles.navbar__item} ${styles.active}` : styles.navbar__item;

export const NavBar = () => (
  <div className={styles.navbar}>
    <NavLink
      to="/packs-list"
      className={({ isActive }) => setActiveStylesForMenu(isActive)}
    >
      <img src={iconCard} alt="Packs list" />
      <p>Packs List</p>
    </NavLink>
    <NavLink to="/profile" className={({ isActive }) => setActiveStylesForMenu(isActive)}>
      <img src={iconProfile} alt="ProfilePage" />
      <p>ProfilePage</p>
    </NavLink>
  </div>
);

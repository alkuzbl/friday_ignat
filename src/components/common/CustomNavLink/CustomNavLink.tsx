import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';

import { NavLinkPropsType } from 'components/common/CustomNavLink/types';

const activeStyleNavLink = (isActive: boolean) =>
  isActive ? { fontWeight: 'bold' } : {};

export const CustomNavLink: FC<NavLinkPropsType> = props => {
  const { path, title } = props;

  return (
    <li>
      <NavLink to={path} style={({ isActive }) => activeStyleNavLink(isActive)}>
        {title}
      </NavLink>
    </li>
  );
};

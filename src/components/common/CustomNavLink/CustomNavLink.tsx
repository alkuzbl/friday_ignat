import React from 'react';

import { NavLink } from 'react-router-dom';

const activeStyleNavLink = (isActive: boolean) =>
  isActive ? { fontWeight: 'bold' } : {};
type NavLinkPropsType = {
  path: string;
  title: string;
};
export const CustomNavLink = (props: NavLinkPropsType) => {
  const { path, title } = props;

  return (
    <li>
      <NavLink to={path} style={({ isActive }) => activeStyleNavLink(isActive)}>
        {title}
      </NavLink>
    </li>
  );
};

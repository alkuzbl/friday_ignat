import React from 'react';

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { AppStoreType } from '../bll/store';

export const RedirectionIfNotAuthorized = (Component: React.FC) => {
  const isAuth = useSelector<AppStoreType, boolean>(state => state.auth.isAuth);
  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return <Component />;
};

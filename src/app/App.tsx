import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import './App.css';

import { setInactiveModalWindow } from './app-slice';

import { getAuthUser } from 'bll/middlewares';
import { AppStoreType } from 'bll/store';
import { ModalWindow, Spinner } from 'components';
import {
  CardsListContainer,
  Header,
  Login,
  NewPassword,
  NotPage,
  PacksListPageContainer,
  ProfileEditContainer,
  ProfilePageContainer,
  RecoveryPassword,
  Registration,
} from 'view';

const App = () => {
  const isInitialized = useSelector<AppStoreType, boolean>(
    state => state.app.isInitialized,
  );
  const activeModalWindow = useSelector<AppStoreType, boolean>(
    state => state.app.modalWindow.modalWindowStatus,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuthUser());
  }, []);

  if (!isInitialized) {
    return <Spinner />;
  }
  const closeModalWindow = () => dispatch(setInactiveModalWindow());
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="recovery" element={<RecoveryPassword />} />
        <Route path="new-password/:token" element={<NewPassword />} />

        <Route
          path="packs-list/:userId/pack/:packId/:currentPage"
          element={<CardsListContainer />}
        />
        <Route
          path="packs-list/cards-pack/:me/:currentPage"
          element={<PacksListPageContainer />}
        />

        <Route path="profile">
          <Route
            path=":userId/pack-page/:currentPage"
            element={<ProfilePageContainer />}
          />
          <Route path="user/edit" element={<ProfileEditContainer />} />
        </Route>

        <Route path="/" element={<Navigate to="login" />} />
        <Route path="*" element={<NotPage />} />
      </Routes>
      <ModalWindow active={activeModalWindow} setInactive={closeModalWindow} />
    </div>
  );
};

export default App;

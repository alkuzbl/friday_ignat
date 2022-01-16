import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';

import './App.css';
import { getAuthUser } from '../bll/auth-slice';
import { AppStoreType } from '../bll/store';
import { ModalWindow } from '../components/common/ModalWindow/ModalWindow';
import { Spinner } from '../components/common/Spinner/Spinner';
import { NotPage } from '../view/404/NotPage';
import { Login } from '../view/Authentication/Login/Login';
import { NewPassword } from '../view/Authentication/NewPassword/NewPassword';
import { RecoveryPassword } from '../view/Authentication/RecoveryPassword/RecoveryPassword';
import { Registration } from '../view/Authentication/Registration/Registration';
import { Header } from '../view/Header/Header';
import { CardsList } from '../view/PacksListPage/CardsList/CardsList';
import { PacksListPageContainer } from '../view/PacksListPage/PacksListPage';
import { ProfileEditContainer } from '../view/ProfilePage/Profile/ProfileEdit/ProfileEdit';
import { ProfilePageContainer } from '../view/ProfilePage/ProfilePage';

import { setInactiveModalWindow } from './app-slice';

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
        {/* разобраться с логикой страниц, пагинацию пока не трогаем, также как и переходы по страницам в card and pack */}
        <Route path="packs-list" element={<Navigate to="cards-pack/all" />} />
        <Route path="packs-list/cards-pack/my" element={<PacksListPageContainer />} />
        <Route path="packs-list/cards-pack/all" element={<PacksListPageContainer />} />
        <Route path="packs-list/cards-pack/:packId" element={<CardsList />} />

        <Route path="/profile" element={<Navigate to="user/pack-page/1" />} />
        <Route path="/profile/:userId/pack-page/1" element={<ProfilePageContainer />} />
        <Route path="/profile/user/edit" element={<ProfileEditContainer />} />
        <Route
          path="profile/user/pack-page/:currentPage"
          element={<ProfilePageContainer />}
        />

        <Route path="/" element={<Navigate to="profile" />} />
        <Route path="*" element={<NotPage />} />
      </Routes>
      <ModalWindow active={activeModalWindow} setInactive={closeModalWindow} />
    </div>
  );
};

export default App;

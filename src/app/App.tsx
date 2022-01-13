import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import { getAuthUser } from '../bll/auth-slice';
import { AppStoreType } from '../bll/store';
import { CommonComponents } from '../components/common/CommonComponents';
import { ModalWindow } from '../components/common/ModalWindow/ModalWindow';
import { Spinner } from '../components/common/Spinner/Spinner';
import { NotPage } from '../view/404/NotPage';
import { Login } from '../view/Authentication/Login/Login';
import { NewPassword } from '../view/Authentication/NewPassword/NewPassword';
import { RecoveryPassword } from '../view/Authentication/RecoveryPassword/RecoveryPassword';
import { Registration } from '../view/Authentication/Registration/Registration';
import { Header } from '../view/Header/Header';
import { PopupConfirmationAddNewPack } from '../view/PacksListPage/CommonPacksList/PackListItem/PopupConfirmationProcessing/PopupConfirmationAddNewPack';
import { PopupConfirmationDeletePack } from '../view/PacksListPage/CommonPacksList/PackListItem/PopupConfirmationProcessing/PopupConfirmationDeletePack';
import { PackPage, PacksListPage } from '../view/PacksListPage/PacksListPage';
import { ProfileEdit } from '../view/ProfilePage/Profile/ProfileEdit/ProfileEdit';
import { ProfilePage } from '../view/ProfilePage/ProfilePage';
import { CardInfo } from '../view/stand/CardInfo/CardInfo';

const App = () => {
  const [active, setActive] = useState<boolean>(false);
  const isInitialized = useSelector<AppStoreType, boolean>(
    state => state.app.isInitialized,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuthUser());
  }, []);

  if (!isInitialized) {
    return <Spinner />;
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="login" element={<Login />} />

        <Route path="registration" element={<Registration />} />

        <Route path="recovery" element={<RecoveryPassword />} />

        <Route path="new-password" element={<NewPassword />} />

        <Route path="components" element={<CommonComponents />} />

        <Route path="packs-list" element={<PacksListPage />} />
        <Route path="packs-list/:packId" element={<PackPage />} />
        {/* стенды для страниц пока не разобрался что к чему */}
        <Route path="packs-list/stand" element={<PopupConfirmationDeletePack />} />
        <Route path="packs-list/stand2" element={<PopupConfirmationAddNewPack />} />
        <Route path="packs-list/stand3" element={<CardInfo />} />
        {/* как готова будет верстка разобраться с логикой страниц */}
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/:currentPage" element={<ProfilePage />} />

        <Route path="profile/edit" element={<ProfileEdit />} />

        <Route path="/" element={<ProfilePage />} />

        <Route path="*" element={<NotPage />} />
      </Routes>
      <ModalWindow active={active} setActive={() => setActive(false)}>
        <PopupConfirmationDeletePack />
        {/* <AddNewPack /> */}
      </ModalWindow>
    </div>
  );
};

export default App;

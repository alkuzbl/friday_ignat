import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import { getAuthMe } from '../bll/login-slice';
import { AppStoreType } from '../bll/store';
import { CommonComponents } from '../components/common/CommonComponents';
import { Spinner } from '../components/common/Spinner/Spinner';
import { NotPage } from '../view/404/NotPage';
import { Header } from '../view/Header/Header';
import { Login } from '../view/Login/Login';
import { NewPassword } from '../view/NewPassword/NewPassword';
import { PacksList } from '../view/PacksList/PacksList';
import { ProfileEdit } from '../view/ProfilePage/Profile/ProfileEdit/ProfileEdit';
import { ProfilePage } from '../view/ProfilePage/ProfilePage';
import { RecoveryPassword } from '../view/RecoveryPassword/RecoveryPassword';
import { Registration } from '../view/Registration/Registration';

// const menuData = [
//   { id: 1, path: '/', title: 'Home' },
//   { id: 2, path: 'login', title: 'Login' },
//   { id: 3, path: 'registration', title: 'Registration' },
//   { id: 4, path: 'profile', title: 'Profile' },
//   { id: 5, path: 'recovery', title: 'Password recovery' },
//   { id: 6, path: 'newPassword', title: 'New password' },
//   { id: 7, path: 'components', title: 'Common components' },
// ];

const App = () => {
  const isInitialized = useSelector<AppStoreType, boolean>(
    state => state.app.isInitialized,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuthMe());
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

        <Route path="packs-list" element={<PacksList />} />
        {/* как готова будет верстка разобраться с логикой страниц */}
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/:currentPage" element={<ProfilePage />} />

        <Route path="profile/edit" element={<ProfileEdit />} />

        <Route path="/" element={<ProfilePage />} />

        <Route path="*" element={<NotPage />} />
      </Routes>
    </div>
  );
};

export default App;

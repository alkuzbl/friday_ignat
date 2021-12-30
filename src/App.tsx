import React from 'react';

import { Route, Routes } from 'react-router-dom';

import './App.css';
import { CommonComponents } from './components/common/CommonComponents';
import { CustomNavLink } from './components/common/CustomNavLink/CustomNavLink';
import { NotPage } from './view/404/NotPage';
import { Home } from './view/Home/Home';
import { Login } from './view/Login/Login';
import { NewPassword } from './view/NewPassword/NewPassword';
import { Profile } from './view/Profile/Profile';
import { RecoveryPassword } from './view/RecoveryPassword/RecoveryPassword';
import { Registration } from './view/Registration/Registration';

const menuData = [
  { id: 1, path: '/', title: 'Home' },
  { id: 2, path: 'login', title: 'Login' },
  { id: 3, path: 'registration', title: 'Registration' },
  { id: 4, path: 'profile', title: 'Profile' },
  { id: 5, path: 'recovery', title: 'Password recovery' },
  { id: 6, path: 'newPassword', title: 'New password' },
  { id: 7, path: 'components', title: 'Common components' },
];

const App = () => (
  <div className="App">
    <ul>
      {menuData.map(item => (
        <CustomNavLink key={item.id} path={item.path} title={item.title} />
      ))}
    </ul>
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/registration" element={<Registration />} />

      <Route path="/profile" element={<Profile />} />

      <Route path="/recovery" element={<RecoveryPassword />} />

      <Route path="/newPassword" element={<NewPassword />} />

      <Route path="/components" element={<CommonComponents />} />

      <Route path="/" element={<Home />} />

      <Route path="*" element={<NotPage />} />
    </Routes>
  </div>
);

export default App;

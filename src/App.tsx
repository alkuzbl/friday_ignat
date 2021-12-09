import React from "react";

import { Routes, Route, NavLink } from "react-router-dom";

import "./App.css";
import { CommonComponents } from "./components/common/CommonComponents";

export const Home = () => <div> Home </div>;
export const Login = () => <div> Login </div>;
export const Registration = () => <div> Registration </div>;
export const Profile = () => <div> Profile </div>;
export const RecoveryPassword = () => <div> Password recovery </div>;
export const NewPassword = () => <div> New password </div>;

export const NotPage = () => <div> 404 </div>;

const activeStyleNavLink = (isActive: boolean) =>
  isActive ? { fontWeight: "bold" } : {};

const App = () => (
  <div className="App">
    <ul>
      <li>
        <NavLink to="/" style={({ isActive }) => activeStyleNavLink(isActive)}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="login" style={({ isActive }) => activeStyleNavLink(isActive)}>
          Login
        </NavLink>
      </li>
      <li>
        <NavLink to="registration" style={({ isActive }) => activeStyleNavLink(isActive)}>
          Registration
        </NavLink>
      </li>
      <li>
        <NavLink to="profile" style={({ isActive }) => activeStyleNavLink(isActive)}>
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink to="recovery" style={({ isActive }) => activeStyleNavLink(isActive)}>
          Password recovery
        </NavLink>
      </li>
      <li>
        <NavLink to="newPassword" style={({ isActive }) => activeStyleNavLink(isActive)}>
          New password
        </NavLink>
      </li>
      <li>
        <NavLink to="components" style={({ isActive }) => activeStyleNavLink(isActive)}>
          Common components
        </NavLink>
      </li>
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

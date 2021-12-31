import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:7542/2.0/',
  withCredentials: true,
});

// api
export const authAPI = {
  setAuthLogin: (data: LoginDataType) =>
    instance.post<AxiosResponse<UserType>>('auth/login', data),
  setRegistration: (data: RegisterUserDataType) =>
    instance.post<any>('auth/register', data),
  getAuthMe: (data: {}) => instance.post<AxiosResponse<UserType>>('auth/me', data),
  updateAuthMe: (data: UpdateUserDataType) =>
    instance.put<AxiosResponse<UserType>>('auth/me', data),
  setLogOut: (data: {}) =>
    instance.delete<AxiosResponse<{ info: string; error: string }>>('auth/me', data),
  getForgotPassword: (data: ForgotDataType) => instance.post<any>('auth/forgot', data),
  setNewPassword: (data: NewPasswordDataType) =>
    instance.post<any>('auth/set-new-password', data),
};

// types
type LoginDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
};
type RegisterUserDataType = Omit<LoginDataType, 'rememberMe'>;
type UpdateUserDataType = {
  name: string;
  avatar: string;
};
type ForgotDataType = {
  email: string;
  from: string;
  message: string;
};
type NewPasswordDataType = {
  password: string;
  resetPasswordToken: string;
};
type UserType = {
  _id: string;
  email: string;
  name: string;
  avatar?: string;
  publicCardPacksCount: number; // количество колод

  created: Date;
  updated: Date;
  isAdmin: boolean;
  verified: boolean; // подтвердил ли почту
  rememberMe: boolean;

  error?: string;
};

import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:7542/2.0/',
  withCredentials: true,
});

// api
export const authAPI = {
  setAuth: (data: LoginDataType) => instance.post<UserType>('auth/login', data),
  setRegistration: (data: RegisterUserDataType) =>
    instance.post<UserType>('auth/register', data),
  getAuthMe: (data: {}) => instance.post<UserType>('auth/me', data),
  setUpdatedUserData: (data: UpdateUserDataType) =>
    instance.put<{ updatedUser: UserType }>('auth/me', data),
  setLogOut: (data: {}) => instance.delete<ResponseType>('auth/me', data),
  getForgotPassword: (data: ForgotDataType) =>
    instance.post<ResponseType>('auth/forgot', data),
  setNewPassword: (data: NewPasswordDataType) =>
    instance.post<ResponseType>('auth/set-new-password', data),
};

// types
export type LoginDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
};
export type RegisterUserDataType = Omit<LoginDataType, 'rememberMe'>;
export type UpdateUserDataType = {
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
export type UserType = {
  _id: string;
  email: string;
  name: string;
  avatar?: string;
  publicCardPacksCount: number; // количество колод
  token: string;
  created: Date;
  updated: Date;
  isAdmin: boolean;
  verified: boolean; // подтвердил ли почту
  rememberMe: boolean;

  error?: string;
};
type ResponseType = { info: string; error: string };
// не обязательный тип - потом решить
export type ResponseErrorType = {
  error: string;
  body: LoginDataType;
};
export type ResponseErrorType2 = {
  error: string;
  email: string;
  in: string; // create user
};

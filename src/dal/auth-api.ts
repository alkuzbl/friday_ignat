import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:7542/2.0/',
  withCredentials: true,
});

// api
export const authAPI = {
  setLogin: (data: any) => instance.post<any>('auth/login', data),
  getAuthMe: () => instance.get<any>('auth/me'),
  logOut: () => instance.delete<any>('auth/login'),
};

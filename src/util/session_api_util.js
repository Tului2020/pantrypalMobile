import axios from 'axios';
import computerIPAddress from '../../IPAddress'


export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const signup = (userData) => {
  return axios.post(`${computerIPAddress}:5000/api/users/register`, userData);
};

export const login = (userData) => {
  return axios.post(`${computerIPAddress}:5000/api/users/login`, userData);
};

export const getUserInfo = () => {
  return axios.get(`${computerIPAddress}:5000/api/users/current`, {
    headers: { Authorization: localStorage.jwtToken },
  });
};
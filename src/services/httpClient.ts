import axios from 'axios';

const user = localStorage.getItem('user');
const token = user ? JSON.parse(user).token : '';

export const api = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    ...(token && { Authorization: `Token ${token}` }),
  },
});

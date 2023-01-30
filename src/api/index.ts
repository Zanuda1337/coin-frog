import axios from 'axios';

export const instance = axios.create({
  withCredentials: false,
  baseURL: 'https://api.coingecko.com/api/v3/',
});

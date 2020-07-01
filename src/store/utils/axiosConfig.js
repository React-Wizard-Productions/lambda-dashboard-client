import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

export const axiosWithOutAuth = () => axios.create({ baseURL });

export const axiosWithAuth = (token) =>
  axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

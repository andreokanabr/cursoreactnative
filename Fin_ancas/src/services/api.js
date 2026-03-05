import axios from 'axios';

const api = axios.create({
  baseURL: 'http://<IP_LOCAL>:3333',
});

export default api;

//https://sujeitoprogramador.com/r-api/?api=filmes

import axios from 'axios';
//FIlmes
const api = axios.create({
  baseURL: 'https://sujeitoprogramador.com/',
});

export default api;

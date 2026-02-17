import axios from 'axios';

// https://economia.awesomeapi.com.br/json/all

// > Rota para buscar BTC > BRL : all/BTC-BRL

export const apiCoin = axios.create({
  baseURL: 'https://economia.awesomeapi.com.br/json/',
});

export const apiCep = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
});

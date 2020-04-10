import axios, { AxiosRequestConfig } from 'axios';

import { API } from '../../config/constants'

const defaultApiConfig = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
  },
  mode: 'no-cors',
};

const createClient = (config: AxiosRequestConfig) => axios.create({ baseURL: API, ...config });

const client = createClient(defaultApiConfig);

export default client;

import axios, { AxiosRequestConfig } from 'axios';

import appConfig from '../config.json';
import useAuth from '../hooks/useAuth';

const { authHeaders } = useAuth();
const config: AxiosRequestConfig = {
  baseURL: appConfig.baseAPIUrl,
  headers: authHeaders,
};

export const axiosInstance = axios.create(config);

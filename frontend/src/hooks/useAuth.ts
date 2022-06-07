import axios from 'axios';
import useToken from './useToken';

const { VITE_APP_ID, VITE_REST_API_KEY, VITE_USERNAME, VITE_PASSWORD } =
  import.meta.env;

const headers = {
  'X-Parse-Application-Id': VITE_APP_ID,
  'X-Parse-REST-API-Key': VITE_REST_API_KEY,
  'Content-Type': 'application/x-www-form-urlencoded',
};

export const apiConfig = {
  headers,
  params: {
    username: VITE_USERNAME,
    password: VITE_PASSWORD,
  },
};

const useAuth = () => {
  const { setToken, getToken } = useToken();

  const userAuthorization = () => {
    axios
      .get('https://parse-wandera.herokuapp.com/parse/login', apiConfig)
      .then((response) => {
        const token = response?.data?.sessionToken;
        setToken(token);
      });
  };

  const authHeaders = {
    ...headers,
    'X-Parse-Session-Token': getToken(),
    'Content-Type': 'application/json',
  };

  return { userAuthorization, authHeaders };
};

export default useAuth;

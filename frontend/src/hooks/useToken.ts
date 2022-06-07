const useToken = () => {
  const setToken = (tokenValue: string) => {
    sessionStorage.setItem('sessionToken', tokenValue);
  };

  const removeToken = () => {
    sessionStorage.removeItem('sessionToken');
  };

  const getToken = () => {
    return sessionStorage.getItem('sessionToken') ?? '';
  };

  return { setToken, removeToken, getToken };
};

export default useToken;

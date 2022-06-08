import { QueryClientProvider } from 'react-query';
import { useEffect } from 'react';
import { queryClient } from './react-query/queryClient';
import DevicesPage from './pages/Devices';
import useAuth from './hooks/useAuth';
import useToken from './hooks/useToken';

// TODO: Fix UI responsivity
const App = () => {
  const { userAuthorization } = useAuth();
  const { removeToken } = useToken();

  useEffect(() => {
    userAuthorization();
    return () => {
      removeToken();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <DevicesPage />
    </QueryClientProvider>
  );
};

export default App;

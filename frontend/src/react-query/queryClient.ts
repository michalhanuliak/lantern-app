import { QueryClient } from 'react-query';

const queryErrorHandle = (error: unknown) => {
  const title =
    error instanceof Error ? error.message : 'Error connecting to server';
  // TODO: Error toast
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: queryErrorHandle,
    },
    mutations: {
      onError: queryErrorHandle,
    },
  },
});

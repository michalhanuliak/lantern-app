import { QueryClient } from 'react-query';

const queryErrorHandle = (error: unknown) => {
  const title =
    error instanceof Error ? error.message : 'Error connecting to server';

  // TODO: Error toast
  return title as unknown as void; // quickfix for linters
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

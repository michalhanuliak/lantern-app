import { QueryClient } from 'react-query';

const queryErrorHandle = (error: unknown) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const title =
    error instanceof Error ? error.message : 'Error connecting to server';

  // TODO: Error toast
  return title as unknown as void;
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

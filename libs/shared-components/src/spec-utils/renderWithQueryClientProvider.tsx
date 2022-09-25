import { ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';

export const renderWithQueryClientProvider = (
  compponentInstance: ReactElement,
  queryClient: QueryClient = new QueryClient()
) =>
  render(
    <QueryClientProvider client={queryClient}>
      {compponentInstance}
    </QueryClientProvider>
  );

import { AppProps } from 'next/app';
import Head from 'next/head';
import { useState } from 'react';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <Head>
        <title>Welcome to core-app!</title>
      </Head>
      <main className="app bg-slate-200 dark:bg-slate-900 text-slate-900 dark:text-slate-100 h-full">
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
        </QueryClientProvider>
      </main>
    </>
  );
}

export default CustomApp;

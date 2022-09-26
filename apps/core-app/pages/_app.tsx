import { AppProps } from 'next/app';
import Head from 'next/head';
import { useState } from 'react';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import './styles.css';
import { ThemeSwitch } from '@abc/shared-components';

function CustomApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <Head>
        <title>ABC Racing Company</title>
      </Head>
      <div className="flex flex-col bg-slate-300 dark:bg-slate-900 text-slate-800 dark:text-slate-100 h-full overflow-y-auto">
        <header className="flex px-8 py-8 items-center justify-between h-20 sticky top-0 bg-slate-200 dark:bg-slate-700 mb-8 border-slate-400 dark:border-slate-400 border-b-2 z-10">
          <span className="text-2xl md:text-4xl">ABC Racing Co</span>
          <ThemeSwitch />
        </header>
        <main className="app">
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
              <Component {...pageProps} />
            </Hydrate>
          </QueryClientProvider>
        </main>
      </div>
    </>
  );
}

export default CustomApp;

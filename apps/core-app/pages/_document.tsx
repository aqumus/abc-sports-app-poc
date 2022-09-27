import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="ABC Racing company app, a case study asssignment by Aquib Vadsaria for Publicis Sapient."
        />
      </Head>
      <body className="h-screen">
        <Main />
        <NextScript />
        <Script id="theme-decider" strategy="beforeInteractive">
          {`// On page load or when changing themes, best to add inline in "head" to avoid FOUC
        if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }`}
        </Script>
      </body>
    </Html>
  );
}

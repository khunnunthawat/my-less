import 'antd/dist/antd.css';
import 'tailwindcss/tailwind.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: any) {
  return (
    <div>
      <Head>
        <title>Next Antd Less</title>
        <link rel='icon' href='/antd-icon.svg' />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

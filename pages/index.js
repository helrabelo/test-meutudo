import React from 'react';
import Head from 'next/head';
import PopUp from '../components/PopUp';
import Navbar from '../components/Navbar';
import Covid19 from '../components/Covid19';
import '../static/css/globalStyles.less';

export default function Home() {
  return (
    <>
      <Head>
        <title>Test Meu Tudo</title>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,700,800"
          rel="stylesheet"
        />
      </Head>
      <div id="popup"></div>
      <Navbar />
      <Covid19 />
    </>
  );
}

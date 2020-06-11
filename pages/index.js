import React from 'react';
import Head from 'next/head';
import PopUp from '../components/PopUp';
import Navbar from '../components/Navbar';
import Tabs from '../components/Tabs';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link href="/static/css/globalStyles.less" rel="stylesheet" />
      </Head>
      <div id="popup"></div>
      {/* <div id="menu"></div> */}
      <Navbar />
      <Tabs />
    </>
  );
}

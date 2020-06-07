import React from 'react';
import Head from 'next/head';
import Popup from '../components/popup';

import classes from '../static/css/globalStyles.less';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="/static/css/globalStyles.less" rel="stylesheet" />
      </Head>
      <body>
        <h1>hi</h1>
        <Popup />
      </body>
    </>
  );
}

import React from 'react';
import Head from 'next/head';
import Container from '../components/Container';
import PopUp from '../components/PopUp';
import Navbar from '../components/Navbar';
import Covid19 from '../components/Covid19';
import '../static/css/globalStyles.less';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div id="popup"></div>
      <Container>
        <Navbar />
        <Covid19 />
      </Container>
    </>
  );
}

import React from 'react';
import Head from 'next/head';
import Navbar from '../components/navbar';
import Main from '../components/main';
import About from '../components/about';
import Symptons from '../components/symptons';
import Spread from '../components/spread';
import Dodont from '../components/dodont';
import Washhands from '../components/wash-hands';
import Banner from '../components/banner';
import Footer from '../components/footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="/static/css/css-helpers.css" rel="stylesheet" />
        <link href="/static/css/navbar.css" rel="stylesheet" />
        <link href="/static/css/footer.css" rel="stylesheet" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Symptons />
      <Spread />
      <Dodont />
      <Washhands />
      <Banner />
      <Footer />
    </>
  );
}

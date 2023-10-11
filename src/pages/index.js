import React from 'react';
import Head from 'next/head';
import Header from '/src/pages/Header.js';
import Body from '/src/pages/Body.js';

export default function Home() {
  return (
    <>
      <Head>
        <title>Daybreak</title>
        <meta name="description" content="PSD Drawings created by artist C.J. Christian | Independant Magazine publication" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <Body />
    </>
  )
}

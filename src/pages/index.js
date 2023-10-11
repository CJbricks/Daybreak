import React from 'react';
import Head from 'next/head';
import Header from '/src/pages/Header.js';
import Body from '/src/pages/Body.js';

export default function Home() {
  return (
    <>
      <Head>
        <title>Daybreak | Independant Art Magazine</title>
        <meta name="description" content="PSD Drawings created by artist C.J. Christian | Independant Magazine publication" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content= "Daybreak | Independant Art Publication"/>
        <meta property="og:description" content="Independant Art Magazine, Publication, and Printing." />
        <meta property="og:image" content="https://live.staticflickr.com/65535/53251589491_11d3408f4d_m.jpg" />
        <link rel="icon" href="/favicon.png" />
        
      </Head>
      <Body />
    </>
  )
}

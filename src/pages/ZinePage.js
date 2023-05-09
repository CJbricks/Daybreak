import React from 'react';
import Issue01 from './Issue01.js';
import styles from "@/styles/Image.module.css"
import Header from './Header.js';
import Footer from './Footer.js';

export default function ZinePage() {
  return (
    <>
      <Header />
        <div className={styles.zinebg}>

            <Issue01 />
        </div>
      <Footer />
    </>
  )
}

import React from 'react';
import Header from './Header.js';
import styles from '@/styles/Sub.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Border from '../../src/pages/Posts/Border.js';
import Footer from './Footer.js';


export default function () {
  return (
    <>
    <Header />
        <Border />
            <div className={styles.contactbox}>
                
                    <p className={styles.contactheader}> Contact me, if you must.</p>
                    <br />
                    <p className={styles.contacttext}>Email: cj.christian.web@gmail.com</p>
                    <p className={styles.contacttext}>Phone: 1-800-Free-Cigarrettes</p>
                    <Link href="https://instagram.com/oreo.blizman" target="_blank">
                        <p className={styles.contacttext}>Instagram: oreo.blizman</p>
                    </Link>
                    <Link href="https://github.com/cjbricks" target="_blank">
                        <p className={styles.contacttext}>Github: CJbricks</p>
                    </Link>
                    <br />
                    <br />
                    <p className={styles.contacttext}>
                        All inquiries for design and contract work
                        <br />
                        please send Email
                        or notification to IG through direct message. 
                    </p>
                
            </div>
        <Border />
    <Footer />
    
    </>
  )
}

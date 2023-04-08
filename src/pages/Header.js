import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import headerImage from '../../public/headerbanner.png';
import Link from 'next/link';
import homeIcon from '../../public/home.png';




export default function Header() {
    

    return (
        <div className={styles.headbox}>
            <div className={styles.scale}>
                    <Image 
                    src={headerImage}
                    width={700}
                    height={500}
                    alt="header-image"
                    className={styles.splash} />
            </div>
            <div className={styles.header}>
                <h2 className={styles.daylight}>DAYBREAK.</h2>
                <div className={styles.subheader}>
                    <Link href="/InfoPage" className={styles.headunit}>
                        <p>WHAT</p>
                    </Link>
                    <Link href="/Images" className={styles.headunit}>
                        <p>ARCHIVE</p>
                    </Link>
                    <Link href="http://bigcartel.com" target="_blank" className={styles.headunit}>
                        <p>PRINT</p>
                    </Link>
                    <Link href="/ContactPage" className={styles.headunit} >
                        <p>HOW</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
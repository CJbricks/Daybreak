import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import headerImage from '../../public/headerbanner.png';



export default function Header() {
    

    return (
        <>
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
                    <p className={styles.headunit}>WORDS</p>
                    <p className={styles.headunit}>IMAGES</p>
                    <p className={styles.headunit}>PRINT</p>
                    <p className={styles.headunit}>CONTACT</p>
                </div>
            </div>
        </>
    )
}
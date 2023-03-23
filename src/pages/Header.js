import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import headerImage from '../../public/headerbanner.png';



export default function Header() {
    

    return (
        <>
            <div class={styles.scale}>
                    <Image 
                    src={headerImage}
                    width={700}
                    height={500}
                    alt="header-image"
                    class={styles.splash} />
            </div>
            <div class={styles.header}>
                <h2 class={styles.daylight}>DAYBREAK.</h2>
                <div class={styles.subheader}>
                    <p class={styles.headunit}>WORDS</p>
                    <p class={styles.headunit}>IMAGES</p>
                    <p class={styles.headunit}>PRINT</p>
                    <p class={styles.headunit}>CONTACT</p>
                </div>
            </div>
        </>
    )
}
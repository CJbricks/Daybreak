import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import headerImage from '../../public/images/headerbanner2.png';
import Link from 'next/link';
import homeIcon from '../../public/home.png';
import { Text } from '@chakra-ui/react'




export default function Header() {
    

    return (
        <div className={styles.headbox}>
                <div className={styles.subheader}>
                    <Link href="/InfoPage" className={styles.headunit}>
                        <p>WHAT?</p>
                    </Link>
                    <Link href="/ZinePage" className={styles.headunit}>
                        <p>PRINT</p>
                    </Link>
                    <Link href="/ContactPage" className={styles.headunit} >
                        <p>CONTACT</p>
                    </Link>
                </div>
            <div className={styles.scale}>
                    <Image 
                    src={headerImage}
                    width={700}
                    height={500}
                    alt="header-image"
                    className={styles.splash} />
            </div>
            <div className={styles.header}>
                <Text color="red.600">DEAL BREAKr</Text>
            </div>
        </div>
    )
}
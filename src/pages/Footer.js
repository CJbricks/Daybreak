import React from 'react'
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import igLogo from '../../public/iglogo.png';
import ghLogo from '../../public/gitlogo.png';
import homeIcon from '../../public/home.png';
import Link from 'next/link';



export default function Footer() {
   
    return (
        <div className={styles.foot}> 
               <Link href="https://www.instagram.com/oreo.blizman/" target="_blank" rel="noopener noreferrer">
                    <Image 
                    className={styles.icon}
                    src={igLogo}
                    alt="icon-ig"
                    height={50}
                    width={50}
                    />
                </Link>
                <Link href="https://www.github.com/CJbricks" target="_blank" rel="noopener noreferrer">
                    <Image
                    className={styles.icon}
                    src={ghLogo}
                    alt="git-icon"
                    height={50}
                    width={50}
                    />
                </Link>
                <Link href="/">
                    <Image 
                        src={homeIcon} 
                        width={50}
                        height={50}
                        className={styles.icon}
                        />
                </Link>
        </div>
    )
}
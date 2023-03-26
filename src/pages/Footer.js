import React from 'react'
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import igLogo from '../../public/iglogo.png';
import ghLogo from '../../public/gitlogo.png';



export default function Footer() {
   
    return (
        <div className={styles.foot}> 
               <a href="https://www.instagram.com/oreo.blizman/" target="_blank" rel="noopener noreferrer">
                    <Image 
                    className={styles.icon}
                    src={igLogo}
                    alt="icon-ig"
                    height={50}
                    width={50}
                    />
                </a>
                <a href="https://www.github.com/CJbricks" target="_blank" rel="noopener noreferrer">
                    <Image
                    className={styles.icon}
                    src={ghLogo}
                    alt="git-icon"
                    height={50}
                    width={50}
                    />
                </a>
        </div>
    )
}
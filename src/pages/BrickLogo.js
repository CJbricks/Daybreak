import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Image.module.css';

export default function BrickLogo(props) {
  return (
    <div className={styles.logobox}>
        <Link href="http://bricks-ten.vercel.app" target="_blank">
            <Image 
            src={props.image}
            alt="logo-link"
            width={70}
            height={70}
            className={styles.logo} />

        </Link>
    </div>
  )
}

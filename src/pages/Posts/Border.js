import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Image.module.css';
import barbBorder from '../../../public/images/barb.png';

export default function Border() {
  return (
    <div className={styles.bordershrink}>
        <Image 
        src={barbBorder}
        alt="barbed-wire-border"
        width={1000}
        height={200}
        class={styles.border}
        />
    </div>
  )
}

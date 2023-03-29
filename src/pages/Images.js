import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Image.module.css';
import kegImage from '../../public/images/keg.jpg';
import Header from './Header.js';
import shedBoy from '../../public/images/shed.jpg';
import nightsGun from '../../public/images/nights.jpg';

export default function Images() {
  return (
    <div>
        <Header />
        <Image 
            src={kegImage}
            width={380}
            heigth={500}
            alt="keg-stand-image" 
            className={styles.imagebox} />

        <Image 
            src={shedBoy}
            width={380}
            heigth={500}
            alt="shed-smoking-image" 
            className={styles.imagebox} />  

        <Image 
            src={nightsGun}
            width={380}
            heigth={500}
            alt="blackmetal-trash-image" 
            className={styles.imagebox} /> 

    </div>
  )
}

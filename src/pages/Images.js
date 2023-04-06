import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Image.module.css';
import kegImage from '../../public/images/keg.jpg';
import Header from './Header.js';
import shedBoy from '../../public/images/shed.jpg';
import nightsGun from '../../public/images/nights.jpg';
import Footer from './Footer.js';
import offlineGuy from '../../public/images/offlineguy.jpg';
import npc from '../../public/npc.jpg';
import birdsImage from '../../public/birds.jpg';

export default function Images() {

  const imageDeposit = [kegImage, shedBoy, nightsGun, offlineGuy, npc, birdsImage]


  return (
    <>
    <Header />
    <div>
        <Image 
            src={imageDeposit[0]}
            width={380}
            heigth={500}
            alt="keg-stand-image" 
            className={styles.imagebox} />

        <Image 
            src={imageDeposit[1]}
            width={380}
            heigth={500}
            alt="shed-smoking-image" 
            className={styles.imagebox} />  

        <Image 
            src={imageDeposit[2]}
            width={380}
            heigth={500}
            alt="blackmetal-trash-image" 
            className={styles.imagebox} /> 

        <Image 
            src={imageDeposit[3]}
            width={380}
            heigth={500}
            alt="offline-image" 
            className={styles.imagebox} />

        <Image 
            src={imageDeposit[4]}
            width={380}
            heigth={500}
            alt="npc-guy-image" 
            className={styles.imagebox} />

        <Image 
            src={imageDeposit[5]}
            width={380}
            heigth={500}
            alt="birds-image" 
            className={styles.imagebox} />

    </div>
    <Footer />
    </>
  )
}

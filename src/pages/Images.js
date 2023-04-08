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
import blackEye from '../../public/images/black-eye.jpg';

export default function Images() {

  const imageDeposit = [kegImage, shedBoy, nightsGun, offlineGuy, npc, birdsImage ]


  return (
    <>
    <Header />
        <div>
            { imageDeposit.map((image) => (
                <Image 
                  key="image"
                  src={image}
                  width={380}
                  heigth={500}
                  alt="archived-image" 
                  className={styles.imagebox} />
            
                 ))
            }
        </div>

    <Footer />
    </>
  )
}

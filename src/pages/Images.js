import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Image.module.css';
import kegImage from '../../public/images/keg.jpg';
import shedBoy from '../../public/images/shed.jpg';
import nightsGun from '../../public/images/nights.jpg';
import offlineGuy from '../../public/images/offlineguy.jpg';
import npc from '../../public/npc.jpg';
import blackEye from '../../public/images/black-eye.jpg';
import vrGuy from '../../public/images/vr-guy.jpg';
import cops from '../../public/images/cops.jpg';
import crowns from '../../public/images/crowns.jpg';
import ohSix from '../../public/images/ohsix.jpg';
import stocks from '../../public/images/stocks.jpg';
import trashMan from '../../public/images/trashman.jpg';
export default function Images() {

  const imageDeposit = [kegImage, nightsGun, offlineGuy, npc, shedBoy, vrGuy, blackEye, cops, crowns, ohSix, stocks, trashMan ]

  return (
    <>
        <div className={styles.imagecenter}>
            { imageDeposit.map((image) => (
                <Image 
                  key="image"
                  src={image}
                  width={280}
                  heigth={400}
                  alt="archived-image" 
                  className={styles.imagebox} />
            
                 ))
            }
          </div>
    </>
  )
}

import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import offlineGuy from '../../../public/images/offlineguy.jpg';
import hunterAvatar from '../../../public/images/hunterav.png';
import Border from './Border.js';

export default function 

() {
  return (
    <div className={styles.body}>
                <div className={styles.container}>
                    <div className={styles.first}>
                        <Image
                        src={offlineGuy}
                        alt="featured-drawing"
                        width={600}
                        height={675}
                        className={styles.image} />
                    </div>
                    <div className={styles.second}>
                        <p className={styles.label}>
                            Offline Guy, Staying Offline.
                        </p>
                        <p className={styles.textbody}>
                            I realized recently that there is not one corner of the earth that
                            the internet will not touch. 
                            There can be no such thing again as Walden.
                            Starlink will be the end of off the grid style living.
                            We are talking bluetooth firewood here connected to your router nested in the base of your smarthome constantly
                            pinging and relaying everything that happens within it's reach to the open sourced blockchain.
                            <br />
                            <br />
                            The singularity already happened. TH4 M4TR1X b4bby.
                        </p>
                        <Image 
                        src={hunterAvatar}
                        alt="mini-avatar"
                        width={350}
                        height={375}
                        class={styles.smallimage}
                         />
                    </div>
                </div>
                <Border />
            </div>
  )
}

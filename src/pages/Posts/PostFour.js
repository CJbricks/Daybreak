import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import avatar from '../../../public/images/monster-box.png';
import kegStand from '../../../public/images/keg.jpg';
import rtlHorse from '../../../public/rtl-horse.jpeg';
import Border from './Border.js';
import { useState } from 'react';


export default function PostFour() {

    const imageArr = [kegStand, rtlHorse];
    const [index, setIndex] = useState(0);

    return (
        <div className={styles.body}>
                <div className={styles.container}>
                    <div className={styles.first}
                        onClick={() => {
                            index !== 0 ? setIndex(index - 1) : setIndex(index + 1)
                        }}>

                        <Image
                        src={imageArr[index]}
                        alt="featured-drawing"
                        width={600}
                        height={675}
                        className={styles.image} />
                    </div>
                    <div className={styles.second}>
                        <p className={styles.label}>Life Is Pain</p>
                        <p className={styles.textbody}>Of all the Hardcore lyrics that I have written over throws I think Life Is Pain is the most accurate to the 
                        experience. 
                        <br />
                        <br />
                        This is an ode to Jock X Violence and all the bro's taking keg stands between sets. 
                        I used to know these crusty kids who hated any mainstream... well... anything they hated Nike, Baseball, Hats, Pullover Hoodies, Cars,
                        Peyton Manning, Me, Coors Light, Family, God, Hardcore Music that had breakdowns in it, Hardcore music, Folk Music, Music and everything else they could get their grubby little jeans on. 
                        <br />
                        But they loved taking beer bongs and smoking vapes and cigs. 
                        <br />
                        <br />
                        Maybe I am the asshole and I just don't understand. IDK not showering sucks.

                        </p>
                        <Image 
                        src={avatar}
                        alt="flower-avatar"
                        width={300}
                        height={300}
                        />
                    </div>
                </div>
                <Border />
            </div>
    )
}

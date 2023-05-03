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
                        <p className={styles.textbody}>
                        <br />
                        Birkenstock X Core
                        <br />

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

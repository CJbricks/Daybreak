import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import avatar from '../../../public/images/birk-chain.png';
import shedBoy from '../../../public/images/shed.jpg';
import Border from './Border.js';
import { useState } from 'react';


export default function PostFive() {

    const imageArr = [shedBoy];
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
                        <p className={styles.label}>High Vis</p>
                        <p className={styles.textbody}>High Res, High Visibility, Turn it up.
                        <br />
                        <br />
                        The end of an era. That's how it feels when you drive down the street and look at an abandoned plot of empty. Space that used to be 
                        occupied by noisy people and noisier music and yelling. Don't buy into the idea that an experience that you are chasing is all that matters. That experience will be sold out and they will move on to another product and another experience that you need to buy. 
                        <br />
                        <br />
                        That's all anything is in the modern era. A BUY MORE $HIT sale. 
                        <br />
                        <br />
                        I'm not in it to buy more shit, I am waiting for the real thing.
                        </p>
                        <Image 
                        src={avatar}
                        alt="clogs-avatar"
                        width={300}
                        height={300}
                        />
                    </div>
                </div>
                <Border />
            </div>
    )
}

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
                        <p className={styles.textbody}>
                        Dumar Brown, artist, &author, &philosopher. & Street philosopher if you will. & I find it strangely inspiring that one of the most influential
                        thinkers I have read is a street dude from Brooklyn NY. & I never thought deeper than the scratches on a wall. & I never looked deeper than the heavy smell of rustoleum until I read Dumar Brown.
                        Some of Dumar's work is nearly sociopathic in it's self-centered ideology; However, If you look deeper than the initial shock of someone writing what people 
                        think and never utter. You may find a clear path to enlightenment. Or at least a path to discovering yourself for what you are & can be.
                        <br />
                        <br />
                        Enlightenment from the most valued place, within. & Swing the hammer of inner strength. 
                        <br />
                        <br />
                        "I like no television. & what I like television won't show."
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

import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import burn from '../../../public/images/nights.jpg';
import trashCan from '../../../public/crowns.jpg';
import secondAv from '../../../public/images/secondav.png';
import Border from './Border.js';
import { useState } from 'react';


export default function PostOne() {

    const imageArr = [burn, trashCan];
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
                        <p className={styles.label}>Lunch Table.</p>
                        <p className={styles.textbody}>I always found the most relatable life lessons at the lunch table.
                            Lord of the flies meets the free market and I believe
                            that the market will solve everything. If left un tampered and free to develop without intervention, the Derek Huntsman archetype 
                            will reign supreme. I used to believe this idea was a bad idea, but now I have come around to respect the nature in which the world works.
                            Entropy is the inevitablility, a law, that can not be escaped.
                        <br />
                        <br />
                        Free from outside influence we would probably
                        all just be burning ourselves with lighters. 
                        <br />
                        <br />
                        Unbending.   

                        </p>
                        <Image 
                        src={secondAv}
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

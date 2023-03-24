import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import burn from '../../../public/nights.jpg';

export default function PostOne() {
    return (
        <div class={styles.body}>
                <div class={styles.container}>
                    <div class={styles.first}>
                        <Image
                        src={burn}
                        alt="featured-drawing"
                        width={600}
                        height={675}
                        class={styles.image} />
                    </div>
                    <div class={styles.second}>
                        <p class={styles.label}>Lunch Table.</p>
                        <p class={styles.textbody}>I always found the wildest kids at the lunch table. A true mix of cultural background and 
                            the true sociological enviroment for male development. Lord of the flies meets the free market and I believe
                            that the market will solve everything. If left un tampered and free to develop as naturally as possible, the Derek Huntsman archetype 
                            will reign. I used to believe this idea was a bad idea, but now I have come around to respect the nature in which the world works.
                        <br />
                        <br />
                        Free from outside influence we would probably
                        all just be burning ourselves with lighters.    

                        </p>
                    </div>
                </div>
            </div>
    )
}

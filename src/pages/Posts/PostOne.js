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
                    <div class={styles.second}></div>
                </div>
            </div>
    )
}

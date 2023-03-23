import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import npcPost from '../../../public/npc.jpg';

export default function PostTwo() {
    return (
        <div class={styles.body}>
                <div class={styles.container}>
                    <div class={styles.first}>
                        <Image
                        src={npcPost}
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

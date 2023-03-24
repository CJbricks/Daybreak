import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import npcPost from '../../../public/npc.jpg';
import Link from 'next/link';

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
                    <div class={styles.second}>
                        <p class={styles.label}>
                            NPC
                        </p>
                        <p class={styles.textbody}>
                            I find it funny that people insult other people with a different mode of thinking by saying
                            "They are an NPC" meaning that they don't have critical thought. The irony
                            is that the odds that you are the rational and conscious entity in a pool of bots is astronomically
                            against you. As a matter of fact, think about it, if some sort of <Link href="">solipsistic</Link> 
                            situation was true and we were ina world of mostly bots and NPC's.
                            <br />
                            <br />
                            Well, that would probably be you too. 
                        </p>
                    </div>
                </div>
            </div>
    )
}

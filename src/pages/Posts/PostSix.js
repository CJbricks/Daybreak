import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import avatar from '../../../public/images/keyring.png';
import vrGuy from '../../../public/images/vr-guy.jpg';
import Border from './Border.js';
import { useState } from 'react';


export default function PostFive() {

    const imageArr = [vrGuy];
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
                        <p className={styles.label}>Wireheading.</p>
                        <p className={styles.textbody}>I can't say it nearly as well or eloquently
                        as George Hotz.
                        
                        </p>
                        <Image 
                        src={avatar}
                        alt="key-ring-avatar"
                        width={300}
                        height={300}
                        />
                    </div>
                </div>
                <Border />
            </div>
    )
}
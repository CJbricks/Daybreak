import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import burn from '../../../public/images/nights.jpg';
import trashCan from '../../../public/crowns.jpg';
import secondAv from '../../../public/images/secondav.png';
import Border from './Border.js';
import { useState } from 'react';
import { Center, Box, Text } from '@chakra-ui/react'


export default function PostOne() {

    const imageArr = [burn, trashCan];
    const [index, setIndex] = useState(0);

    return (
        <>
        <Center bg="#F2F2F2">
            <Box 
            textAlign="center" 
            alignItems="center" 
            justifyContent="center"
            fontFamily="'Climate Crisis', Arial, Helvetica, sans-serif;"
           // border="1px solid red"
            fontSize={['1em', '1.2em', '2.25em']}
            fontWeight={600}
            p={3}
            >
                <Text color="teal.50">" Darkness Is The Name "</Text>
            </Box>
        </Center>
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
                        <p className={styles.textbody}>
                        <br />
                        Free from outside influence we would probably
                        <br />
                        all just be burning ourselves with lighters.   
                        </p>
                    </div>
                </div>
                <Border />
            </div>
        </>
    )
}

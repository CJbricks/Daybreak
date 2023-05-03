import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import avatar from '../../../public/images/monster-box.png';
import kegStand from '../../../public/images/keg.jpg';
import rtlHorse from '../../../public/rtl-horse.jpeg';
import Border from './Border.js';
import { useState } from 'react';
import { Center, Box, Text } from '@chakra-ui/react'

export default function PostFour() {

    const imageArr = [kegStand, rtlHorse];
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
                <Text color="orange.500">" Life Is Plain "</Text>
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
                        Birkenstock X Core
                        <br />

                        </p>
                    </div>
                </div>
                <Border />
            </div>
            </>
    )
}

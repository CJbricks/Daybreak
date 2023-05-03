import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import offlineGuy from '../../../public/images/offlineguy.jpg';
import hunterAvatar from '../../../public/images/hunterav.png';
import Border from './Border.js';
import { Center, Text, Box } from '@chakra-ui/react'

export default function 

() {
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
                <Text color="orange.700">" Offline Guy "</Text>
            </Box>
        </Center>
    <div className={styles.body}>
                <div className={styles.container}>
                    <div className={styles.first}>
                        <Image
                        src={offlineGuy}
                        alt="featured-drawing"
                        width={600}
                        height={675}
                        className={styles.image} />
                    </div>
                    <div className={styles.second}>
                        <p className={styles.textbody}>
                            <br />
                            The singularity already happened. TH4 M4TR1X b4bby.
                        </p>
                    </div>
                </div>
                <Border />
            </div>
            </>
  )
}

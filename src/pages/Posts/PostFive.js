import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import avatar from '../../../public/images/birk-chain.png';
import shedBoy from '../../../public/images/shed.jpg';
import Border from './Border.js';
import { useState } from 'react';
import { Box, Text, Center, Flex } from '@chakra-ui/react';


export default function PostFive() {

    const imageArr = [shedBoy];
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
                <Text color="pink.200">"Addicted To Disappointment"</Text>
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
            </>
    )
}

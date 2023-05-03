import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import avatar from '../../../public/images/keyring.png';
import vrGuy from '../../../public/images/vr-guy.jpg';
import Border from './Border.js';
import { useState } from 'react';
import { Box, Text, Center, Flex } from '@chakra-ui/react';


export default function PostFive() {

    const imageArr = [vrGuy];
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
                <Text color="orange.500">" Wireheading "</Text>
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
                    <br />
                    <div className={styles.second}>
                        
                        <p className={styles.textbody}>I can't say it nearly as well or eloquently
                        as George Hotz. 
                        <br />
                        <br />
                        <Link href="https://geohot.github.io/blog/jekyll/update/2023/04/11/wireheading-city.html">Here.</Link>
                        </p>
                    </div>
                </div>
                <Border />
            </div>

            </>
    )
}
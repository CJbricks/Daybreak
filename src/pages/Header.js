import React from 'react'
import { Image, Text, Box, Heading, StylesProvider } from '@chakra-ui/react'
import styles from '@/styles/Home.module.css'

export default function Header() {
  return (
    <>

      <Box
            height={'full'}
            width={'full'}
            align={'center'}
            justify={'center'}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            bg={'brand.900'}
            p={8}
            >

            <Image src='/images/birk-chain.png'
            alt={'logo-banner'}
            height={'500px'}
            width={'500px'}
            className={styles.fade}
             />
            <Heading color="brand.700" fontWeight={700} mt={8} fontSize={['lg', '2xl', '6xl']} className={styles.fadeslow}>DAYBREAK</Heading>
            <Text color={'gray.600'} p={2} fontSize={['md', 'lg', '3xl']} className={styles.fadeslower} >Books and Print</Text>
        </Box>
    </>
  )
}
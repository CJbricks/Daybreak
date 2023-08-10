import React from 'react'
import { Image, Text, Box, Heading } from '@chakra-ui/react'

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
            bg={'orange.200'}
            p={10}
            >

            <Image src='/images/birk-chain.png' alt="BBB-logo-banner-image"
            height={'500px'}
            width={'500px'}
             />
            <Heading color="gray.900" fontWeight={700}>DAYBREAK</Heading>
            <Text color={'gray.500'}>Books and Zines</Text>
        </Box>
    </>
  )
}
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
            bg={'brand.900'}
            p={8}
            >

            <Image src='/images/birk-chain.png' alt="BBB-logo-banner-image"
            height={'500px'}
            width={'500px'}
             />
            <Heading color="brand.700" fontWeight={700} mt={8} fontSize={['lg', '2xl', '6xl']}>DAYBREAK</Heading>
            <Text color={'gray.600'} p={2} fontSize={['md', 'lg', '3xl']} >Books and Print</Text>
        </Box>
    </>
  )
}
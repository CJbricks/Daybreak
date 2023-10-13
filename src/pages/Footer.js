import React from 'react'
import { ReactNode } from 'react';

import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Image
} from '@chakra-ui/react';

const Logo = (props, any) => {
  return (
    <Image src="/images/logo.png" alt="daybreak-art-magazine-logo" width={40} height={40} viewBox="0 0 120 28" />
  );
};

const ListHeader = ({ children }, { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.700')}
      mt={5} >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box pl={'20px'}>
              <Logo color={useColorModeValue('gray.700', 'gray.700')} />
              
            </Box>
            <Text fontWeight={700} fontSize={'sm'}>Brick By Brick Design </Text>
            <Text fontSize={'sm'}>
              © 2023 All rights reserved
              <br />
              powered by Chakra UI
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Product</ListHeader>
            <Link href={'#'}>Overview</Link>
            <Link href={'#'}>Features</Link>
            <Link href={'https://github.com/cjbricks'}>Code</Link>
            <Link href={'/ContactPage'}>Pricing Inquiry</Link>
            <Link href={'/Images'}>Recent Releases</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'/InfoPage'}>About</Link>
            <Link href={'/Body'}>Home</Link>
            <Link href={'/ContactPage'}>Contact</Link>
            <Link href={'https://bricks-ten.vercel.app'} target="_blank">Partners</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Commission Request</Link>
            <Link href={'#'}>Print Request</Link>
            <Link href={'#'}>Legal</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Follow Us</ListHeader>
            <Link href={'https://twitter.com/elonhuskyyy'}>Twitter</Link>
            <Link href={'https://github.com/cjbricks'}>Github</Link>
            <Link href={'https://instagram.com/oreo.blizman'}>Instagram</Link>
            <Link href={'#'}>LinkedIn</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
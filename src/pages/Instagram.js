import React from 'react'
import { SimpleGrid, Box } from '@chakra-ui/react';
import { InstagramEmbed } from 'react-social-media-embed'


export default function Instagram() {
  return (
    <>
    <SimpleGrid columns={[1, null, 3]} bg={'brand.900'} pt={4} pb={4}>
        <Box align={'center'}>
            <InstagramEmbed url="https://www.instagram.com/p/Crbc_lEvETW/" width={380} />
        </Box>
        <Box align={'center'}>
            <InstagramEmbed url="https://www.instagram.com/p/CqqeIeUJ95M/" width={380} />
        </Box>
        <Box align={'center'}>
            <InstagramEmbed url="https://www.instagram.com/p/ClEtwKoPvdp/" width={380} />
        </Box>
    </SimpleGrid>
    </>
  )
}
import { React, useState } from 'react';
import {
    Container,
    SimpleGrid,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react'
import Image from 'next/image'
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5'
import nextPage from '../../public/zine/nextpage.jpg';
import leftyPage from '../../public/zine/lefty.jpg';
import thirdPage from '../../public/zine/bluepagetwo.jpg';

const Feature = ({ text, icon, iconBg }, FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  )
  }
   
export default function Issue01() {

    const imageArray = [leftyPage, nextPage, thirdPage]

    const [count, setCount] = useState(0)
  
  return (
    <>
    <Container maxW={'8xl'} py={4} align={'center'} justify={'center'} >
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} >
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'brand.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('brand.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            "No. 001"
          </Text>
          <Heading>Daybreak Issue No.001</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
           Introducing Daybreak Issue No. 001, "Lefty" by Cody Christian. 
           This book contains over 50pgs of original illustration and writings centered around the climate of technocracy and 
           the emerging singularity. All drawings are done on TracPad and then expanded on physically with simple tooling such as sharpie and 
           Pilot markers. 
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
            }>
            <Feature
              icon={<Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />}
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'25pgs of TracPad Illustration'}
            />
            <Feature
              icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Featuring Original Drawings from Cody Christian'}
            />
            <Feature
              icon={<Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />}
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Bound Book Paper Back Soft Cover'}
            />
          </Stack>
        </Stack>
        <Flex w={['300px', '600px']} h={['400px', '800px']}>
            <div onClick={()=>{ count === imageArray.length - 1 ? setCount(0) : setCount(count + 1)}}>
                <Image
                    alt={'featured zine image'}
                    src={imageArray[count]}
                />
            </div>
        </Flex>
      </SimpleGrid>
    </Container>
</>
    )
}

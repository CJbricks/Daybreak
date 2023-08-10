import { React } from 'react'
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image
} from '@chakra-ui/react';
import { BiMenu } from 'react-icons/bi'


export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('whiteAlpha.900', 'whiteAlpha.900')} px={4} mt={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'lg'}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            bg={useColorModeValue('gray.200', 'gray.200')}
            color={useColorModeValue('alphaBlack.900', 'alphaBlack.900')}
                _hover={{
                  bg: 'gray.100',
                }}
            onClick={isOpen ? onClose : onOpen} >
              <BiMenu size='full' /> 
              </IconButton>
          <HStack spacing={8} alignItems={'center'}>
            <Box p={[0, 0, 4]}>
              <Image 
                src='/images/keyring.png' 
                alt='mg-body-mod-logo-small'
                width={20}
                height={20}
                />
            </Box>
            {/* Navbar not menu */}
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
              fontSize={['md', 'lg', 'xl']}
              fontWeight={500}>
              
                <Link 
                    href='/Body'
                    px={2}
                    py={1}
                    rounded={'full'}
                    _hover={{
                   textDecoration: 'none',
                   
                   bg: 'brand.900',
                 }}>Home</Link>
              <Link 
              href='/Services'
               px={2}
               py={1}
               rounded={'full'}
               _hover={{
                 textDecoration: 'none',
                 bg: 'brand.900',
               }}>About</Link>
              <Link 
                href='/GalleryMain'
                px={2}
                py={1}
                rounded={'full'}
                _hover={{
                  textDecoration: 'none',
                  bg: 'brand.900',
                }}>Gallery</Link>
                 <Link 
                href='/LinkPage'
                px={2}
                py={1}
                rounded={'full'}
                _hover={{
                  textDecoration: 'none',
                  bg: 'brand.900',
                }}>Store</Link>
                
                
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
           
            {/* Quotelink 
              <Link href='/LinkPage' target='_blank'>
                <Button
                  variant={'outline'}
                  colorScheme={'red'}
                  size={'sm'}
                  mr={4}
                  _hover={{ bg: 'red.200', color: 'white' }}
                  >
                  Quote
                </Button>
              </Link>
            */}

              <Link href='mailto:cj.christian.web@gmail.com' target='_blank'>
                <Button
                  variant={'outline'}
                  colorScheme='blue'
                  size={'sm'}
                  mr={4}
                  _hover={{ bg: 'brand.900', color: 'white' }}
                  >
                  Submit Your Book
                </Button>
              </Link>
          </Flex>
        </Flex>

                {/* Drop menu */}
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
            <Link 
                    href='/Body'
                    px={2}
                    py={1}
                    rounded={'full'}
                    _hover={{
                   textDecoration: 'none',
                   
                   bg: useColorModeValue('gray.400', 'gray.500'),
                 }}>Home</Link>

            <Link 
                    href='/LinkPage'
                    px={2}
                    py={1}
                    rounded={'full'}
                    _hover={{
                   textDecoration: 'none',
                   
                   bg: useColorModeValue('gray.400', 'gray.500'),
                 }}>Contact</Link>
            <Link 
              href='/Services'
               px={2}
               py={1}
               rounded={'full'}
               _hover={{
                 textDecoration: 'none',
                 bg: useColorModeValue('gray.400', 'gray.500'),
               }}>About</Link>
              <Link 
                href='/GalleryMain'
                px={2}
                py={1}
                rounded={'full'}
                _hover={{
                  textDecoration: 'none',
                  bg: useColorModeValue('gray.400', 'gray.500'),
                }}>Store</Link>
            
                
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}></Box>
    </>
  );
}
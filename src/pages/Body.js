import React from 'react';
import Images from './Images.js';
import Footer from '/src/pages/Footer.js';
import Header from './Header.js';
import BrickLogo from './BrickLogo.js';
import brickLogo from '../../public/clogLOGO.png';
import Issue01 from './Issue01.js';
import { Heading } from '@chakra-ui/react';
import Navbar from './Navbar.js'
import { BiHeading } from 'react-icons/bi';

export default function Test() {
    return (
        <>
        <Navbar />
        <Header />
            <Images />
            <Heading
            p={2}
            textAlign="center"
            color="brand.700"
            fontWeight={600} 
            fontSize={["18px", "36px", "72px"]}
            bg="brand.900"
            borderRadius={'5px'}
            m={4} > " LEFTY "</Heading>
            <Issue01 />
        <Footer />
        </>
    )
}
import React from 'react';
import Images from './Images.js';
import Footer from '/src/pages/Footer.js';
import Header from './Header.js';
import BrickLogo from './BrickLogo.js';
import brickLogo from '../../public/clogLOGO.png';
import Border from './Posts/Border.js';
import Issue01 from './Issue01.js';
import { Text } from '@chakra-ui/react';

export default function Test() {
    return (
        <>
        <BrickLogo image={brickLogo} />
        <Header />
            <Images />
            <Text
            p={2}
            textAlign="center"
            color="teal.400"
            fontWeight={600} 
            fontSize={["14px", "24px", "72px"]} > " LEFTY "</Text>
            <Issue01 />
            <Border />
        <Footer />
        </>
    )
}
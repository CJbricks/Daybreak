import React from 'react';
import PostOne from '/src/pages/Posts/PostOne.js';
import PostTwo from '/src/pages/Posts/PostTwo.js';
import PostThree from '/src/pages/Posts/PostThree.js';
import PostFour from '/src/pages/Posts/PostFour.js';
import Footer from '/src/pages/Footer.js';
import Header from './Header.js';
import BrickLogo from './BrickLogo.js';
import brickLogo from '../../public/clogLogo.png';

export default function Test() {
    return (
        <>
        <BrickLogo image={brickLogo} />
        <Header />
            <PostFour />
            <PostOne />
            <PostTwo />
            <PostThree />
        <Footer />
        </>
    )
}
import React from 'react';
import PostOne from '/src/pages/Posts/PostOne.js';
import PostTwo from '/src/pages/Posts/PostTwo.js';
import PostThree from '/src/pages/Posts/PostThree.js';
import Footer from '/src/pages/Footer.js';

export default function Test() {
    return (
        <>
            <PostOne />
            <PostTwo />
            <PostThree />
                <Footer />
        </>
    )
}
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from './Header.js';
import Footer from './Footer.js';
import styles from '@/styles/Sub.module.css';


export default function InfoPage() {
  return (
    <>
        <Header />
            <div className={styles.infobox}>
                <p className={styles.infoheader}>PSD document drawings</p>
                <p className={styles.subheadtext}>... and what they mean to me</p>
                <p className={styles.infotext}>Daybreak is a project aimed at changing the context of negative feeling.
                <br />
                <br />
                Or, let's be honest, it's supposed to be funny. Merauder said it best "Life is pain" so let's take a moment
                and take off our pity party hats. If life is pain and we are in a constant entropic cycle of hard work begets the inevitable collapse... Then let's make the best we can of the situation.
                Laugh at the finger in the socket of reality and two-step to the song of the collapsing dystopic empire. These drawings and captions 
                are not aimed at providing any sort of insight or deep context to a systematically decaying world. Instead they are meant to provide a small amount of levity to the monotonous decline.
                <br />
                <br />
                Ceremony used to be my favorite band, then it was infest for a while after that, and maybe settled somewhere between Drug Church and Superheaven these days. IDK why you need to know that but you may see a pattern if you look
                deep into it and stare. 
                <br />
                <br />
                Most of these drawings are made by marking straight from a trac-pad to a PSD document. I will include
                video examples of the process, but it's not necessarily that impressive. The old Black Flag covers 
                are the reason that these drawings are black line drawings and they are made to intentionally look somewhat crude. 
                Maybe that matters maybe it doesn't, but hot damn those old Black Flag covers were ahead of their time. The line of skateboard decks made by $lave was pretty influential as well, but I think
                they are straight up Pettibone rip offs. 
                </p>
                <br />
                <p className={styles.infotext}> Posted: April 16th, 2023</p>
            </div>
        <Footer />
    </>
  )
}

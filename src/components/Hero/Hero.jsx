import React from 'react';

import { HeroImgBox } from './Hero.styled.js';
import heroPhoto from '../../assets/hero-photo.png';



const Hero = () => {
    return (
        <>
            <HeroImgBox
                component="img"
                src={heroPhoto}
                alt="Hero img"
            />
        </>
    );
};


export default Hero;

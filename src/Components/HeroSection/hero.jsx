import React from 'react';
import './hero.css';
import h1 from '../../assets/h1.png';
const Hero = () => {
    return (
        <div className='hero container'>
            <div className='hero-overlay'>
                <img src={h1} alt="Decorative" className='imgh1'/>
                <div className='hero-text'>
                    <h1>Welcome to HomeHarbor</h1>
                </div>
            </div>
        </div>
    );
};

export default Hero;
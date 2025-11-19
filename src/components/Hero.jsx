import React from 'react';
import SwiperSlider from './SwiperSlider';

const slides = [
    {
        id: 1,
        image: "https://xenothemes.co.uk/html-templates/petcare/images/2.png",
    },
    {
        id: 2,
        image: "https://xenothemes.co.uk/html-templates/petcare/images/3.png",
    },
    {
        id: 3,
        image: "https://i.ibb.co/B2F5B4Hk/photo-1550159930-40066082a4fc-ixlib-rb-4-1.jpg",

    },
    {
        id: 4,
        image: "https://i.ibb.co/rfvFygbb/photo-1556977528-a0e5ed9268ae-ixlib-rb-4-1.jpg",
    }
];

const Hero = () => {
    return (
        <div className=''>
            <SwiperSlider slides={slides} />
        </div>
    );
};

export default Hero;
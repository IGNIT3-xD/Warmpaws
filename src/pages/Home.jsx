import React, { Suspense, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import VetSlider from '../components/VetSlider';
import PopularCards from './../components/PopularCards';
import Hero from '../components/Hero';
import Tips from '../components/Tips';
import AOS from 'aos';
import 'aos/dist/aos.css';


const servicesPromise = fetch('/Data.json')
    .then(res => res.json())

const Home = () => {
    const vetsData = useLoaderData()

    useEffect(() => {
        document.body.style.overflowX = 'hidden'; 
        AOS.init();
    }, [])

    return (
        <div>
            <Hero />

            <h1 data-aos='fade' className='text-center font-bold text-2xl mt-10'>Popular Winter Care <span className='text-green-700'>Services</span></h1>
            {
                <Suspense fallback={<p>Loading...</p>}>
                    <PopularCards servicesPromise={servicesPromise}></PopularCards>
                </Suspense>
            }

            <Tips />

            <h1 className='mt-14 text-center font-bold text-2xl'>Meets Our Expert <span className='text-green-700'>Vets</span></h1>
            <div className='w-11/12 mx-auto'>
                <VetSlider vets={vetsData}></VetSlider>
            </div>
        </div>
    );
};

export default Home;
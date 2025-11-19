import React from 'react';
import error from '../assets/error.jpg'
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='flex flex-col items-center justify-center my-30'>
            <img className='object-cover mx-auto w-[350px] md:w-[500px] rounded-2xl' src={error} alt="" />
            <Link className='btn bg-linear-to-l from-green-600 to-green-700 text-white mt-5' to={'/'}>Home</Link>
        </div>
    );
};

export default Error;
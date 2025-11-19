import React, { use, useEffect } from 'react';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PopularCards = ({ servicesPromise }) => {
    const data = use(servicesPromise)
    const popularData = data.sort((a, b) => b.rating - a.rating)
    // console.log(popularData);

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='my-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto w-11/12'>
            {
                popularData.map(data =>
                    <div key={data.serviceId} data-aos="fade" className="card bg-base-100 w-90 lg:w-96 mx-auto shadow-sm transition hover:shadow-2xl duration-300">
                        <figure>
                            <img className='w-full h-56 object-cover' src={data.image} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold">{data.serviceName}</h2>
                            <p className='font-semibold flex items-center'>
                                <span>Rating: <span className='m-1'>{data.rating}</span></span>
                                <Rating name="half-rating-read" size='small' defaultValue={data.rating} precision={0.5} readOnly />
                            </p>
                            <div className="card-actions justify-end flex items-center">
                                <p className='text-xl text-black/70 font-bold'>${data.price}</p>
                                <Link to={`services/${data.serviceId}`} className="btn bg-green-700 text-white">Views Details</Link>
                            </div>
                        </div>
                    </div>
                )
            }
            <Link to={'/services'} className='grid place-content-end md:col-span-2 lg:col-span-3 text-green-700 hover:underline'>See more...</Link>
        </div>
    );
};

export default PopularCards;
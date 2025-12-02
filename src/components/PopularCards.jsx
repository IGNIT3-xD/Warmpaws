import React, { use, useEffect } from 'react';
import { Link } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PopularCards = ({ servicesPromise }) => {
    const data = use(servicesPromise)
    const popularData = data.sort((a, b) => b.rating - a.rating).slice(0, 6)
    // console.log(popularData);

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='my-10 grid md:grid-cols-3 lg:grid-cols-4 gap-5 mx-auto w-11/12'>
            {
                popularData.map(service =>
                    <div
                        key={service?.serviceId}
                        className="mx-auto w-[350px] md:w-80 lg:w-[300px] bg-white border border-gray-200 shadow-md rounded-xl hover:shadow-xl transition-all transform hover:-translate-y-1 overflow-hidden flex flex-col h-full"
                    >
                        {/* IMAGE */}
                        <div className="h-48 w-full overflow-hidden">
                            <img
                                src={service?.image}
                                alt={service?.serviceName}
                                className="w-full h-full object-cover hover:scale-110 duration-300"
                            />
                        </div>

                        {/* CONTENT */}
                        <div className="p-5 flex flex-col grow">

                            {/* TITLE */}
                            <Link
                                to={`/services/${service?.serviceId}`}
                                className="text-lg font-semibold text-gray-900 hover:text-green-700 transition-colors line-clamp-2 min-h-12"
                            >
                                {service?.serviceName}
                            </Link>

                            {/* RATING + PRICE */}
                            <div className="flex items-center justify-between mt-3">
                                <div className="flex items-center gap-1">
                                    <span className="text-yellow-500 text-lg">⭐</span>
                                    <span className="text-gray-700 font-medium">{service?.rating}</span>
                                </div>

                                <span className="text-2xl font-bold text-green-700">
                                    ${service?.price}
                                </span>
                            </div>

                            {/* BUTTON (sticks at bottom) */}
                            <Link
                                to={`/services/${service?.serviceId}`}
                                className="mt-auto block w-full text-center py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors font-semibold"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                )
            }
            <Link to={'/services'} className='grid md:col-span-3 lg:col-span-4 text-green-700 hover:underline'>See more...</Link>
        </div>
    );
};

export default PopularCards;
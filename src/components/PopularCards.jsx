import React, { use, useEffect } from 'react';
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
        <div className='my-10 grid md:grid-cols-3 lg:grid-cols-4 gap-5 mx-auto w-11/12'>
            {
                popularData.map(data =>
                    <div key={data?.serviceId} className="mx-auto w-80 md:w-56 lg:w-72 bg-white border border-black/20 shadow-lg rounded-2xl hover:shadow-xl transition overflow-hidden">
                        <div className="h-40 w-full overflow-hidden">
                            <img
                                src={data?.image}
                                alt="Pet service thumbnail"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-4 space-y-2">
                            <Link
                                to={`/services/${data?.serviceId}`}
                                className="text-base font-semibold text-gray-900 hover:text-blue-600 transition"
                            >
                                {data?.serviceName}
                            </Link>


                            <div className="text-sm text-gray-500 leading-tight">
                                Rating: <span className="text-yellow-500 font-medium">{data?.rating} ★</span>
                            </div>


                            <div>
                                <span className="text-xl font-bold text-green-600">$ {data?.price}</span>
                            </div>
                        </div>
                    </div>
                )
            }
            <Link to={'/services'} className='grid md:col-span-3 lg:col-span-4 text-green-700 hover:underline'>See more...</Link>
        </div>
    );
};

export default PopularCards;
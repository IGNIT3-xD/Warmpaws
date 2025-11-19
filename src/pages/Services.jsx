import Rating from '@mui/material/Rating';
import { Link, useLoaderData } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Services = () => {
    const data = useLoaderData()

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='my-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10 w-11/12 mx-auto'>
            {
                data.map(data =>
                    <div data-aos='zoom-out' key={data.serviceId} className="card bg-base-100 w-90 lg:w-96 mx-auto shadow-sm transition hover:shadow-2xl duration-300">
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
                                <Link to={`${data.serviceId}`} className="btn bg-green-700 text-white">Views Details</Link>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Services;
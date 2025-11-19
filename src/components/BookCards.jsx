import React, { use } from 'react';
import { AuthContext } from './../context/AuthContext';

const BookCards = ({ data }) => {
    const { book, setBook } = use(AuthContext)

    const handleRemove = () => {
        // console.log(data.serviceId);
        const filteredData = book.filter(book => book.serviceId !== data.serviceId)
        setBook(filteredData);
    }

    return (
        <div className='p-4 shadow rounded-md flex flex-col md:flex-row justify-between items-center gap-5'>
            <div className='flex flex-col md:flex-row gap-4'>
                <figure>
                    <img className='md:w-48 w-56 mx-auto object-cover rounded-md shadow-lg' src={data.image} alt="" />
                </figure>
                <div className='space-y-2 text-center md:text-left'>
                    <p className='text-xl font-semibold'>{data.serviceName}</p>
                    <p className='text-black/70'>{data.providerName}</p>
                    <p className='text-black/60'>{data.providerEmail}</p>
                    <p className='font-semibold text-xl'>${data.price}</p>
                </div>
            </div>
            <button onClick={handleRemove} className='btn w-1/2 mx-auth md:mx-0 md:w-auto bg-red-500 text-white'>Remove Book</button>
        </div>
    );
};

export default BookCards;
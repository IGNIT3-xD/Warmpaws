import React, { use } from 'react';
import { AuthContext } from './../context/AuthContext';
import { Link } from 'react-router';
import BookCards from '../components/BookCards';

const Book = () => {
    const { book } = use(AuthContext)
    // console.log(book);

    return (
        <div className='w-11/12 mx-auto my-24'>
            <p className='text-2xl md:text-3xl font-bold my-5 text-center lg:text-left'>Your Booked <span className='text-green-700'>Services</span></p>
            <div className='space-y-5'>
                {
                    book.length === 0 ?
                        <p className='font-semibold text-2xl text-black/60 text-center lg:text-left'>Currently you don't have any booking. Please check <Link className='text-green-700 underline' to={'/services'}>our services</Link></p>
                        : book.map(data => <BookCards key={data.serviceId} data={data}></BookCards>)
                }
            </div>
        </div>
    );
};

export default Book;
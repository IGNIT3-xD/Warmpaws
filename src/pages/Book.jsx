import React, { use } from 'react';
import { AuthContext } from './../context/AuthContext';
import { Link } from 'react-router';
import BookCards from '../components/BookCards';

const Book = () => {
    const { user, book } = use(AuthContext)
    // console.log(book);

    if (user === null) {
        return <div className='grid place-content-center place-items-center my-40 gap-5 w-11/12 mx-auto text-center'>
            <p className='font-bold text-2xl md:text-3xl'>Please <span className='text-green-700'>Login / Registraion</span> to booking.</p>
            <div className='space-x-4'>
                <Link to={'/auth/login'} className='btn bg-green-600 text-white'>Login</Link>
                <Link to={'/auth/registration'} className='btn bg-green-600 text-white'>Registration</Link>
            </div>
        </div>
    }

    return (
        <div className='w-11/12 mx-auto my-8'>
            <p className='text-xl font-bold mb-5 text-center lg:text-left'>Your Booked <span className='text-green-700'>Services</span></p>
            <div className='space-y-5'>
                {
                    book.length === 0 ?
                        <p className='font-semibold text-2xl text-black/60 text-center lg:text-left'>Currently you don't have any booking</p>
                        : book.map(data => <BookCards key={data.serviceId} data={data}></BookCards>)
                }
            </div>
        </div>
    );
};

export default Book;
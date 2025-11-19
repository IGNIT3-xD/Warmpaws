import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from './../components/Footer';
import { Toaster } from 'react-hot-toast';
import Loading from './../components/Loading';

const Root = () => {
    const { state } = useNavigation()

    return (
        <div>
            <div className='flex flex-col min-h-screen bg-white/70'>
                <Navbar />
                <main className='flex-1'>
                    {
                        state === 'loading' ? <Loading /> : <Outlet />
                    }
                </main>
                <Footer />
            </div>
            <Toaster />
        </div>
    );
};

export default Root;
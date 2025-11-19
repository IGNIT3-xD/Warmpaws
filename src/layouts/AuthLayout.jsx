import React, { use } from 'react';
import { Navigate, Outlet, useLocation, useNavigation } from 'react-router';
import Navbar from '../components/Navbar';
import { Toaster } from 'react-hot-toast';
import { AuthContext } from '../context/AuthContext';
import Footer from './../components/Footer';
import Loading from '../components/Loading';

const AuthLayout = () => {
    const { user } = use(AuthContext)
    const location = useLocation()
    const { state } = useNavigation()

    if (user) {
        return <Navigate to={location.state || '/'}></Navigate>
    }

    return (
        <div>
            <div className='flex flex-col min-h-screen'>
                <Navbar></Navbar>
                <main className='flex-1 p-18 auth-bg grid place-content-center'>
                    {
                        state === 'loading' ? <Loading /> : <Outlet />
                    }
                </main>
                <Footer></Footer>
            </div>
            <Toaster />
        </div>
    );
};

export default AuthLayout;
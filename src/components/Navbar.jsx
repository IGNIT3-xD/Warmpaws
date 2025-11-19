import React, { useContext } from 'react';
import { Link } from 'react-router';
import { NavLink } from 'react-router';
import logo from '../assets/logo.png';
import { AuthContext } from './../context/AuthContext';
import toast from 'react-hot-toast';

const Navbar = () => {
    const { user, logoutUser, setUser } = useContext(AuthContext)
    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/services'}>Services</NavLink></li>
        <li><NavLink to={'/profile'}>My Profile</NavLink></li>
        <li><NavLink to={'/book'}>My Booking</NavLink></li>
    </>

    const handleLogout = () => {
        logoutUser()
            .then(() => {
                toast.success("Log Out Successfull")
                setUser(null)
            })
            .catch((err) => toast.error(err.code))
    }

    return (
        <div className="navbar bg-base-100 shadow-sm lg:px-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                </div>
                <Link to={'/'}><img className='w-22' src={logo} alt="Logo" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <img className='border border-black/50 w-12 h-12 rounded-full m-2 object-cover hover:cursor-pointer' title={user?.displayName} src={user?.photoURL} alt="User Image" />
                            <button onClick={handleLogout} className='btn'>Log Out</button>
                        </> :
                        <Link to={'/auth/login'} className="btn">Login / Register</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;
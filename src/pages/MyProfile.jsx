import React, { use } from 'react';
import { AuthContext } from './../context/AuthContext';
import toast from 'react-hot-toast';
import { Link } from 'react-router';

const MyProfile = () => {
    const { user, updateUser, setUser } = use(AuthContext)

    const handleUpdateProfile = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        // console.log(name, photo);
        if (name.length < 2 || photo.length <= 5) {
            toast.error("Please enter a valid name or photo url");
            return;
        }

        updateUser({ displayName: name, photoURL: photo })
            .then(() => {
                setUser({ ...user, displayName: name, photoURL: photo })
            })
            .catch(err => {
                toast.error(err.code);
                setUser(user)
            })

        e.target.reset()
    }

    if (user === null) {
        return <div className='grid place-content-center place-items-center my-40 gap-5 w-11/12 mx-auto text-center'>
            <p className='font-bold text-2xl md:text-3xl'>Please <span className='text-green-700'>Login / Registraion</span> to update your profile</p>
            <div className='space-x-4'>
                <Link to={'/auth/login'} className='btn bg-green-600 text-white'>Login</Link>
                <Link to={'/auth/registration'} className='btn bg-green-600 text-white'>Registration</Link>
            </div>
        </div>
    }

    return (
        <div className='flex flex-col lg:flex-row gap-10 shadow p-4 my-10 items-center justify-center w-11/12 mx-auto'>
            <div className='w-full text-center bg-white/50 border border-black/5 rounded-sm p-4'>
                <figure className='rounded-sm'>
                    <img className='w-48 mx-auto object-cover h-full rounded-sm' src={user?.photoURL} alt="User image" />
                </figure>
                <p className='mt-4 font-semibold'>Name: <span className='text-black/60'>{user?.displayName}</span></p>
                <p className='font-semibold'>Email: <span className='text-black/60'>{user?.email}</span></p>
            </div>
            <form onSubmit={handleUpdateProfile} className='w-full'>
                <h1 className='text-2xl font-semibold text-center lg:text-left mb-8'>Update your <span className='text-green-700'>profile</span></h1>
                <div className='grid grid-cols-2 place-items-center gap-5'>
                    <input type="text" name="name" className='input placeholder:text-black/70' placeholder='Name' />
                    <input type="email" name="email" defaultValue={user?.email} readOnly className='input text-black/50' />
                    <input type="text" name="photo" className='input placeholder:text-black/70' placeholder='Image URL' />
                    <input type="text" name="number" disabled className='input placeholder:text-black/50' placeholder='Phone No.' />
                </div>
                <button className='w-full mt-5 btn text-white bg-green-700'>Update Profile</button>
            </form>
        </div>
    );
};

export default MyProfile;
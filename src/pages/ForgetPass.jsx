import React, { use } from 'react';
import { Link, Navigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';

const ForgetPass = () => {
    const { email, forgetPass } = use(AuthContext)

    const handleReset = (e) => {
        e.preventDefault()
        const forMail = e.target.email.value;
        // console.log(forMail);

        forgetPass(forMail)
            .then(() => {
                e.target.reset()
                toast.success("Reset link sent. Redirecting to your mail...");
                setTimeout(() => {
                    window.location.href = 'https://mail.google.com';
                }, 1500);
            })
            .catch(err => toast.error(err.code))
    }

    return (
        <div className='card bg-base-100 w-80'>
            <form onSubmit={handleReset} className='card-body'>
                <label className="label">Email</label>
                <input type="email" name='email' defaultValue={email} className="input placeholder:text-black/60" placeholder="Email" />
                <button className='btn bg-green-700 text-white'>Reset Password</button>
                <Link to={'/auth/login'} className='btn'>Go Back</Link>
            </form>
        </div>
    );
};

export default ForgetPass;
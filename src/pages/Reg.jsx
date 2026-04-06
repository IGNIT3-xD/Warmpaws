import React, { useContext, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Reg = () => {
    const { createUser, setUser, updateUser } = useContext(AuthContext)
    const [showPass, setShowPass] = useState(false)

    const handleReg = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const pass = e.target.password.value;
        // console.log(name, photo, email, pass);

        const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/
        if (name.length < 2) {
            toast.error('Name must be contains more than 2 letters');
            return;
        }
        if (!passPattern.test(pass)) {
            toast.error("Password must contains at least a capital, a small letter, a digit and a special character")
            return;
        }

        createUser(email, pass)
            .then((result) => {
                toast.success("Registration Successfull!!")

                const user = result.user;
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo })
                    })
                    .catch((err) => {
                        toast.error(err.code)
                        setUser(user)
                    })

                e.target.reset()
            })
            .catch(err => toast.error(err.code))
    }

    const handleShowPass = (e) => {
        e.preventDefault()
        setShowPass(!showPass)
    }

    return (
        <div className="card bg-base-100 w-80 mx-auto shrink-0 shadow-2xl mt-10">
            <h1 className='text-center font-bold text-2xl mt-4'>Registration <span className='text-green-700'>Now!!!</span></h1>
            <form onSubmit={handleReg} className="card-body">
                <fieldset className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" name='name' required className="input placeholder:text-black/60" placeholder="Name" />
                    <label className="label">Photo Url</label>
                    <input type="text" name='photo' required className="input placeholder:text-black/60" placeholder="Photo Url" />
                    <label className="label">Email</label>
                    <input type="email" name='email' required className="input placeholder:text-black/60" placeholder="Email" />
                    <label className="label">Password</label>
                    <div className='relative'>
                        <input type={showPass ? 'text' : 'password'} name='password' className="input placeholder:text-black/60" placeholder="Password" />
                        <button onClick={handleShowPass} className='cursor-pointer absolute right-2.5 top-2.5 text-[16px]'>{showPass ? <FaEyeSlash />
                            : <FaEye />}</button>
                    </div>
                    <button className="btn text-white bg-green-700 mt-4">Register</button>
                    <Link to={'/auth/login'}>Already have an account <span className='text-green-700 hover:underline'>Login now</span></Link>
                </fieldset>
            </form>
        </div>
    );
};

export default Reg;
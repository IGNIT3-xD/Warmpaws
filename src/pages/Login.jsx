import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const { loginUser, googleSignIn, setUser, setEmail } = useContext(AuthContext)
    const [showPass, setShowPass] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                toast.success("Sign In Successfull !!");
                setUser(result.user)
                navigate(location.state || '/');
            })
            .catch(err => toast.error(err.code))
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.password.value;
        // console.log(email, pass);

        const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/
        if (!passPattern.test(pass)) {
            toast.error("Please enter a valid email or password!!")
            return;
        }

        loginUser(email, pass)
            .then((result) => {
                toast.success("Login Successfull!!")
                navigate(location.state || '/')
                setUser(result.user);
                e.target.reset();
            })
            .catch((err) => {
                toast.error(err.code);
            })
    }

    const handleShowPass = (e) => {
        e.preventDefault();
        setShowPass(!showPass)
    }

    return (
        <div className="card bg-base-100 w-80 mx-auto shrink-0 shadow-2xl mt-10">
            <h1 className='text-center font-bold text-2xl mt-4' >Login <span className='text-green-700' > Now!!!</span ></h1 >
            <form onSubmit={handleLogin} className="card-body">
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" name='email' className="input placeholder:text-black/60" placeholder="Email" />
                    <label className="label">Password</label>
                    <div className='relative'>
                        <input type={showPass ? 'text' : 'password'} name='password' className="input placeholder:text-black/60" placeholder="Password" />
                        <button onClick={handleShowPass} className='cursor-pointer absolute right-2.5 top-2.5 text-[16px]'>{showPass ? <FaEyeSlash />
                            : <FaEye />}</button>
                    </div>
                    <div><Link to={'/auth/forget-password'} className="link link-hover">Forgot password?</Link></div>
                    <button className="btn text-white bg-green-700 mt-4">Login</button>
                    <Link to={'/auth/registration'}>Didn't have an account? <span className='text-green-700 hover:underline'>Register now</span></Link>
                </fieldset>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                </button>
            </form>
        </div>
    );
};

export default Login;
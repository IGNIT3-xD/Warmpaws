import React, { use } from 'react';
import { AuthContext } from './../context/AuthContext';
import toast from 'react-hot-toast';
import { Link } from 'react-router';

const MyProfile = () => {
    const { user, updateUser, setUser } = use(AuthContext);

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;

        if (name.length < 2 || photo.length <= 5) {
            toast.error("Please enter a valid name or photo url");
            return;
        }

        updateUser({ displayName: name, photoURL: photo })
            .then(() => setUser({ ...user, displayName: name, photoURL: photo }))
            .catch(err => {
                toast.error(err.code);
                setUser(user);
            });

        e.target.reset();
    };

    // If user is not logged in
    if (user === null) {
        return (
            <div className="grid place-content-center my-32 w-11/12 mx-auto text-center gap-6">
                <p className="font-bold text-3xl">
                    Please{" "}
                    <span className="text-green-700">Login / Registration</span> to update your profile
                </p>
                <div className="space-x-4">
                    <Link to="/auth/login" className="btn bg-green-600 text-white">
                        Login
                    </Link>
                    <Link to="/auth/registration" className="btn bg-green-600 text-white">
                        Registration
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="w-11/12 mx-auto mt-26">
            <div className="flex flex-col lg:flex-row gap-10 p-10 rounded-3xl shadow-xl bg-linear-to-br from-white to-green-50 border border-gray-200 items-center justify-center">

                {/* Profile Card */}
                <div className="w-full lg:w-1/2 text-center bg-white rounded-3xl shadow p-6 border border-gray-100">
                    <figure className="flex justify-center">
                        <img
                            className="w-40 h-40 object-cover rounded-full shadow-lg"
                            src={user?.photoURL}
                            alt="User"
                        />
                    </figure>

                    <h2 className="mt-6 text-2xl font-bold">{user?.displayName}</h2>

                    <p className="text-gray-600 mt-1">
                        Email: <span className="font-medium">{user?.email}</span>
                    </p>
                </div>

                {/* Update Form */}
                <form
                    onSubmit={handleUpdateProfile}
                    className="w-full lg:w-1/2 bg-white p-8 rounded-3xl shadow border border-gray-100 space-y-6"
                >
                    <h1 className="text-3xl font-bold text-center lg:text-left">
                        Update Your <span className="text-green-700">Profile</span>
                    </h1>

                    <div className="grid grid-cols-2 gap-5">

                        <input
                            type="text"
                            name="name"
                            className="input input-bordered w-full rounded-xl placeholder:text-gray-500"
                            placeholder="Your Name"
                        />

                        <input
                            type="email"
                            name="email"
                            defaultValue={user?.email}
                            readOnly
                            className="input input-bordered w-full rounded-xl bg-gray-100 text-gray-600"
                        />

                        <input
                            type="text"
                            name="photo"
                            className="input input-bordered w-full rounded-xl placeholder:text-gray-500"
                            placeholder="New Photo URL"
                        />

                        <input
                            type="text"
                            disabled
                            className="input input-bordered w-full rounded-xl bg-gray-100 text-gray-400"
                            placeholder="Phone (Disabled)"
                        />
                    </div>

                    <button className="btn bg-green-700 hover:bg-green-800 text-white w-full rounded-xl mt-4">
                        Update Profile
                    </button>
                </form>

            </div>
        </div>
    );
};

export default MyProfile;

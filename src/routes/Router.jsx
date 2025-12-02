import { createBrowserRouter } from "react-router";
import Root from './../layouts/Root';
import Home from './../pages/Home';
import Services from './../pages/Services';
import MyProfile from './../pages/MyProfile';
import ServiceDetails from './../pages/ServiceDetails';
import AuthLayout from './../layouts/AuthLayout';
import Login from './../pages/Login';
import Reg from './../pages/Reg';
import PrivateRoute from "../private routes/PrivateRoute";
import ForgetPass from "../pages/ForgetPass";
import Loading from "../components/Loading";
import Book from './../pages/Book';
import Error from "../components/Error";
import AboutUs from './../pages/AboutUs';
import Contact from './../pages/Contact';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch('/Vets.json'),
                hydrateFallbackElement: <Loading></Loading>,
            },
            {
                path: 'services',
                Component: Services,
                loader: () => fetch('/Data.json'),
                hydrateFallbackElement: <Loading></Loading>,
            },
            {
                path: 'services/:id',
                element: <ServiceDetails />,
                loader: () => fetch('/Data.json'),
                hydrateFallbackElement: <Loading></Loading>,
                errorElement: <Error></Error>
            },
            {
                path: 'profile',
                element: <PrivateRoute><MyProfile /></PrivateRoute>
            },
            {
                path: 'book',
                element: <PrivateRoute><Book /></PrivateRoute>
            },
            {
                path: 'about-us',
                Component: AboutUs
            },
            {
                path: 'contact',
                Component: Contact
            },
            {
                path: '*',
                Component: Error
            }
        ]
    },
    {
        path: 'auth',
        Component: AuthLayout,
        children: [
            { path: '/auth/login', Component: Login },
            { path: '/auth/registration', Component: Reg },
            { path: '/auth/forget-password', Component: ForgetPass }
        ]
    },
]);
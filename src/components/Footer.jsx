import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            {/* Main Footer Content */}
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="md:col-span-1">
                        <h2 className="text-2xl font-bold text-white mb-4">
                            Warm<span className="text-green-500">Paws</span>
                        </h2>
                        <p className="text-gray-400 mb-4">
                            Your trusted companion for professional pet care services during winter and beyond.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://x.com/Mimran65789385" target='_blank'
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                                aria-label="Twitter"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    width="30" height="30"
                                    viewBox="0 0 50 50"
                                    className="fill-current"
                                >
                                    <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
                                </svg>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/imran-ali-mern/" target='_blank'
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                                aria-label="Linkedin"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    width="100" height="100"
                                    className="fill-current"
                                    viewBox="0 0 48 48">
                                    <path d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                                </svg>
                            </a>
                            <a
                                href="https://www.facebook.com/IGNIT3" target='_blank'
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                                aria-label="Facebook"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    className="fill-current">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="hover:text-green-500 transition-colors">Home</a>
                            </li>
                            <li>
                                <a href="/services" className="hover:text-green-500 transition-colors">Services</a>
                            </li>
                            <li>
                                <a href="/about-us" className="hover:text-green-500 transition-colors">About Us</a>
                            </li>
                            <li>
                                <a href="/profile" className="hover:text-green-500 transition-colors">My Profile</a>
                            </li>
                            <li>
                                <a href="/book" className="hover:text-green-500 transition-colors">My Booking</a>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="hover:text-green-500 transition-colors">Pet Sitting</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-green-500 transition-colors">Dog Walking</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-green-500 transition-colors">Grooming</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-green-500 transition-colors">Veterinary Care</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-green-500 transition-colors">Training</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 mt-1">📍</span>
                                <span>123 Pet Street, Animal City, AC 12345</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 mt-1">📞</span>
                                <span>(555) 123-4567</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 mt-1">✉️</span>
                                <span>support@warmpaws.com</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 mt-1">🕐</span>
                                <span>Mon-Fri: 8AM - 8PM<br />Sat-Sun: 9AM - 6PM</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-6xl mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            Copyright © {new Date().getFullYear()} - All rights reserved by WarmPaws
                        </p>
                        <div className="flex gap-6 text-sm">
                            <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                                Terms of Service
                            </a>
                            <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
import React, { Suspense, useEffect, useState } from 'react';
import { useLoaderData, Link } from 'react-router';
import VetSlider from '../components/VetSlider';
import PopularCards from './../components/PopularCards';
import Hero from '../components/Hero';
import Tips from '../components/Tips';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loading from './../components/Loading';
import CountUp from 'react-countup';

const servicesPromise = fetch('/Data.json')
    .then(res => res.json())

const Home = () => {
    const vetsData = useLoaderData()
    const [email, setEmail] = useState('')
    const [subscribed, setSubscribed] = useState(false)

    useEffect(() => {
        document.body.style.overflowX = 'hidden';
        AOS.init();
    }, [])

    const handleNewsletter = () => {
        if (email) {
            setSubscribed(true)
            setTimeout(() => setSubscribed(false), 3000)
            setEmail('')
        }
    }

    return (
        <div className="bg-linear-to-b from-white to-gray-50">
            <Hero />
            
            {/* Stats Section */}
            <section className="py-16 bg-green-700 text-white" data-aos="fade-up">
                <div className="w-11/12 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <h3 className="text-4xl font-bold mb-2"><CountUp duration={3} enableScrollSpy:true end={100} />+</h3>
                        <p className="md:text-xl text-green-100">Happy Pets</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold mb-2"><CountUp duration={3} enableScrollSpy:true end={250} />+</h3>
                        <p className="md:text-xl text-green-100">Services Done</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold mb-2"><CountUp duration={3} enableScrollSpy:true end={20} />+</h3>
                        <p className="md:text-xl text-green-100">Expert Vets</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold mb-2">24/7</h3>
                        <p className="md:text-xl text-green-100">Support</p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="pt-12">
                <h1 className='text-center font-bold text-3xl md:text-4xl mb-4' data-aos="fade-up">
                    Popular Winter Care <span className='text-green-700'>Services</span>
                </h1>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
                    Comprehensive pet care services designed to keep your furry friends healthy and happy during the cold season
                </p>
                <Suspense fallback={<Loading />}>
                    <PopularCards servicesPromise={servicesPromise}></PopularCards>
                </Suspense>
            </section>

            <Tips />

            {/* Testimonials Section */}
            <section className="pt-8 pb-16 bg-white" data-aos="fade-up">
                <div className="w-11/12 max-w-6xl mx-auto">
                    <h2 className="text-center font-bold text-3xl md:text-4xl mb-4">
                        What Pet Parents <span className="text-green-700">Say</span>
                    </h2>
                    <p className="text-center text-gray-600 mb-12">Trusted by thousands of pet owners</p>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay="100">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center text-white font-bold mr-3">
                                    JD
                                </div>
                                <div>
                                    <h4 className="font-semibold">Jessica Davis</h4>
                                    <div className="text-yellow-500">★★★★★</div>
                                </div>
                            </div>
                            <p className="text-gray-700">
                                "Amazing service! Dr. Chen took great care of my golden retriever. The staff is friendly and professional."
                            </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay="200">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center text-white font-bold mr-3">
                                    MR
                                </div>
                                <div>
                                    <h4 className="font-semibold">Michael Roberts</h4>
                                    <div className="text-yellow-500">★★★★★</div>
                                </div>
                            </div>
                            <p className="text-gray-700">
                                "The winter care tips helped so much! My cat is much happier now. Highly recommend their services."
                            </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay="300">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center text-white font-bold mr-3">
                                    SP
                                </div>
                                <div>
                                    <h4 className="font-semibold">Sarah Peterson</h4>
                                    <div className="text-yellow-500">★★★★★</div>
                                </div>
                            </div>
                            <p className="text-gray-700">
                                "Excellent grooming service! My poodle looks fantastic and the prices are very reasonable."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vets Section */}
            <section className="pt-5 pb-16 bg-gray-50">
                <h1 className='text-center font-bold text-3xl md:text-4xl mb-4' data-aos="fade-up">
                    Meet Our Expert <span className='text-green-700'>Vets</span>
                </h1>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
                    Our team of experienced veterinarians is dedicated to providing the best care for your pets
                </p>
                <div className='w-11/12 mx-auto'>
                    <VetSlider vets={vetsData}></VetSlider>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-20 bg-linear-to-r from-green-600 to-green-700 text-white" data-aos="fade-up">
                <div className="w-11/12 max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Stay Updated with Pet Care Tips
                    </h2>
                    <p className="text-green-100 mb-8 text-lg">
                        Subscribe to our newsletter for expert advice, seasonal tips, and exclusive offers
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            className="flex-1 px-6 py-4 rounded-lg text-gray-800 border focus:outline-none focus:ring-4 focus:ring-green-300"
                        />
                        <button
                            onClick={handleNewsletter}
                            className="px-8 py-4 bg-white text-green-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
                        >
                            Subscribe
                        </button>
                    </div>

                    {subscribed && (
                        <p className="mt-4 text-green-100 font-semibold animate-pulse">
                            ✓ Thank you for subscribing!
                        </p>
                    )}

                    <p className="mt-6 text-sm text-green-100">
                        Join 10,000+ pet parents already receiving our weekly tips
                    </p>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-white" data-aos="fade-up">
                <div className="w-11/12 max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Give Your Pet the Best Care?
                    </h2>
                    <p className="text-gray-600 mb-8 text-lg">
                        Book an appointment today and experience professional pet care
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition-colors shadow-lg">
                            Book Appointment
                        </button>
                        <Link to={'/services'} className="px-8 py-4 bg-white border-2 border-green-700 text-green-700 font-semibold rounded-lg hover:bg-green-50 transition-colors">
                            View All Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* Trust Badges */}
            <section className="py-12 border-t border-gray-200">
                <div className="w-11/12 max-w-6xl mx-auto">
                    <p className="text-center text-gray-500 mb-8 text-sm uppercase tracking-wider">
                        Trusted By Leading Organizations
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80">
                        <div className="text-2xl font-bold text-gray-400">PetSafe™</div>
                        <div className="text-2xl font-bold text-gray-400">VetCare+</div>
                        <div className="text-2xl font-bold text-gray-400">AnimalHealth</div>
                        <div className="text-2xl font-bold text-gray-400">PawPartners</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
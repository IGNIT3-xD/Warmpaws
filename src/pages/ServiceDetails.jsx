import { useEffect, useState, useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import star from '../assets/star.gif';
import { toast } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceDetails = () => {
  const { setBook } = useContext(AuthContext);
  const { id } = useParams();
  const data = useLoaderData();
  const [matchedData, setMatchedData] = useState([]);

  useEffect(() => {
    const filteredData = data.find(pet => pet.serviceId === parseInt(id));
    setMatchedData(filteredData);
  }, [data, id]);

  useEffect(() => {
    AOS.init();
    document.body.style.overflowX = 'hidden';
  }, []);

  const handleBook = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;

    if (!name || !email) {
      toast.error('Please enter a valid name or email', { position: 'bottom-center' });
      return;
    }

    toast.success(`${name} has booked ${matchedData.serviceName}`, {
      position: 'bottom-center',
    });
    e.target.reset();
    setBook(prev => [...prev, matchedData]);
  };

  const { image, serviceName, providerName, providerEmail, price, rating, slotsAvailable, description, category } = matchedData;

  return (
    <div className="w-11/12 mx-auto mt-26">

      {/* Details Section */}
      <div className="flex flex-col lg:flex-row gap-8 p-6 rounded-3xl shadow-xl bg-linear-to-br from-white to-green-50 border border-gray-200">

        {/* Image */}
        <figure
          data-aos="fade-right"
          className="bg-white rounded-2xl shadow p-3 w-full lg:w-1/2 flex justify-center"
        >
          <img
            src={image}
            alt={serviceName}
            className="rounded-2xl w-full max-w-md object-cover"
          />
        </figure>

        {/* Text Content */}
        <div data-aos="fade-left" className="space-y-3 lg:w-1/2">
          <h1 className="text-3xl font-bold text-gray-900">{serviceName}</h1>
          <p className="text-gray-600 leading-relaxed">{description}</p>

          <div className="divider"></div>

          <p className="font-semibold">Provider: <span className="text-gray-700">{providerName}</span></p>
          <p className="font-semibold">Email: <span className="text-gray-700">{providerEmail}</span></p>

          <div className="divider"></div>

          <p className="font-semibold">Slots Available: {slotsAvailable}</p>

          <div className="flex items-center justify-between mt-2">
            <p className="font-semibold flex items-center gap-2">
              Rating:
              <span className="text-lg font-bold">{rating}</span>
              <img className="w-7" src={star} alt="" />
            </p>

            <span className="px-3 py-1 bg-green-600 text-white rounded-full shadow text-sm">
              {category}
            </span>
          </div>

          <div className="divider"></div>

          <p className="text-2xl font-bold text-green-700">Price: ${price}</p>
        </div>
      </div>

      {/* Booking Form Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 my-12 p-10 rounded-3xl shadow-xl bg-white border border-gray-200">

        {/* Text */}
        <div className="text-center lg:text-left lg:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold">
            Book This Service <span className="text-green-600">Now!</span>
          </h1>
          <p className="text-gray-600 leading-relaxed lg:w-4/5 mx-auto lg:mx-0">
            Get premium pet care from trusted professionals. Fill out the form to secure your slot today!
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleBook} className="lg:w-1/2 w-full">
          <div className="shadow-lg p-6 rounded-2xl bg-linear-to-br from-green-50 to-white border border-gray-200 space-y-4">

            <div>
              <label className="block font-semibold">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="input input-bordered w-full rounded-xl"
              />
            </div>

            <div>
              <label className="block font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="user@mail.com"
                className="input input-bordered w-full rounded-xl"
              />
            </div>

            <button className="btn bg-green-600 hover:bg-green-700 text-white w-full rounded-xl mt-3">
              Book Now
            </button>

          </div>
        </form>
      </div>

    </div>
  );
};

export default ServiceDetails;

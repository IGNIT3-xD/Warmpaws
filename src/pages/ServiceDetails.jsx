import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import star from '../assets/star.gif'
import { toast } from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceDetails = () => {
  const { setBook } = useContext(AuthContext)
  const { id } = useParams()
  const data = useLoaderData()
  const [matchedData, setMatchedData] = useState([])

  useEffect(() => {
    const filteredData = data.find(pet => pet.serviceId === parseInt(id))
    setMatchedData(filteredData);
  }, [data, id])

  useEffect(() => {
    document.body.style.overflowX = 'hidden'; 
    AOS.init();
  }, [])

  // console.log(data);

  const handleBook = (e) => {
    e.preventDefault()
    const name = e.target.name.value;
    const email = e.target.email.value;

    if (name.length === 0 || email.length === 0) {
      toast.error('Please enter a valid name or email', {
        position: 'bottom-center'
      })
      return;
    }

    toast.success(`${name} has been book the ${matchedData.serviceName}`, {
      position: 'bottom-center'
    });
    e.target.reset();

    setBook(prev => [...prev, matchedData])
  }

  const { image, serviceName, providerName, providerEmail, price, rating, slotsAvailable, description, category } = matchedData;

  return (
    <div className='my-10 w-11/12 mx-auto'>
      <div className='flex flex-col lg:flex-row gap-8 shadow p-4'>
        <figure data-aos="fade-right" className='bg-white/50 p-2 border border-black/5 rounded-sm'>
          <img className='w-96 mx-auto object-cover h-full rounded-sm md:w-full lg:w-96' src={image} alt="" />
        </figure>
        <div data-aos="fade-left">
          <p className='text-2xl font-bold'>{serviceName}</p>
          <p className='text-black/60'>{description}</p>
          <div className="divider"></div>
          <p className='font-semibold'>Provider: <span className='text-black/70'>{providerName}</span></p>
          <p className='font-semibold'>Provider Email: <span className='text-black/70'>{providerEmail}</span></p>
          <div className="divider"></div>
          <p className='font-semibold'>Slots available: {slotsAvailable}</p>
          <div className='flex items-center justify-between'>
            <p className='font-semibold flex items-center'>
              <span>Rating: <span className='m-1'>{rating}</span></span>
              <img className='w-6' src={star} alt="" />
            </p>
            <p className='bg-green-700/80 text-white rounded-full p-2'>{category}</p>
          </div>
          <div className="divider"></div>
          <p className='text-xl font-bold'>Price: ${price}</p>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center lg:flex-row gap-8 shadow my-10 p-5'>
        <div className='text-center lg:text-left lg:flex-2'>
          <h1 className='text-2xl lg:text-4xl font-bold'>Book Service <span className='text-green-700'>Now!!</span></h1>
          <p className='text-black/60 lg:w-[80%] mt-2 mx-auto lg:mx-0'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam illum dolores eligendi aliquid cumque tempora praesentium doloremque, quibusdam culpa quasi.</p>
        </div>
        <form onSubmit={handleBook} className="lg:flex-1 card-body">
          <fieldset className="fieldset shadow-sm p-4 w-90">
            <label className="label">Name</label>
            <input type="text" name='name' className="input placeholder:text-black/60" placeholder="Name" />
            <label className="label">Email</label>
            <input type="email" name='email' className="input placeholder:text-black/60" placeholder="user@mail.com" />
            <button className="btn bg-green-700 text-white mt-4">Book Now</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ServiceDetails;
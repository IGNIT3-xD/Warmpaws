import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Tips = () => {
    useEffect(() => {
        document.body.style.overflowX = 'hidden';
        AOS.init({ duration: 1000 });
    }, [])

    return (
        <div className='my-8 w-11/12 mx-auto'>
            <h2 className="text-center font-bold text-3xl md:text-4xl mb-4">
                Winter Care Tips for <span className="text-green-700">Pets</span>
            </h2>
            <div className='my-8 grid md:grid-cols-2 lg:grid-cols-4'>
                <div data-aos='fade' className='border border-black/10 p-4 space-y-2 bg-white'>
                    <img width="48" height="48" src="https://img.icons8.com/external-those-icons-lineal-those-icons/48/external-salt-organic-food-those-icons-lineal-those-icons.png" alt="external-salt-organic-food-those-icons-lineal-those-icons" />
                    <p className='font-semibold text-black/80'>Protect Paws from Ice, Salt, and Chemicals</p>
                    <p className='text-black/60'>Salty roads and sidewalks, antifreeze, and de-icers can burn your pet's paws or be toxic if licked.
                        Use paw balm or booties before walks.
                    </p>
                </div>
                <div data-aos='fade' className='border border-black/10 p-4 space-y-2 bg-white'>
                    <img width="50" height="50" src="https://img.icons8.com/external-others-pike-picture/50/external-Shelter-pet-shelter-others-pike-picture-5.png" alt="external-Shelter-pet-shelter-others-pike-picture-5" />
                    <p className='font-semibold text-black/80'>Ensure Proper Shelter and Bedding</p>
                    <p className='text-black/60'>Pets, especially short-haired breeds, puppies, and senior animals, can get cold quickly.
                        Keep indoor pets in a warm, draft-free area, and provide extra blankets or an elevated bed.
                    </p>
                </div>
                <div data-aos='fade' className='border border-black/10 p-4 space-y-2 bg-white'>
                    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/dog-bowl.png" alt="dog-bowl" />
                    <p className='font-semibold text-black/80'>Monitor Food and Water Intake:</p>
                    <p className='text-black/60'>Pets that spend more time outdoors in the cold may need a slight increase in food to generate energy for warmth. Always consult your vet first
                        Crucially, check outdoor water bowls frequently.
                    </p>
                </div>
                <div data-aos='fade' className='border border-black/10 p-4 space-y-2 bg-white'>
                    <img width="50" height="50" src="https://img.icons8.com/external-solid-adri-ansyah/64/external-weather-weather-solid-adri-ansyah-25.png" alt="external-weather-weather-solid-adri-ansyah-25" />
                    <p className='font-semibold text-black/80'>Guard Against Cold Weather Hazards</p>
                    <p className='text-black/60'>It is highly toxic but tastes sweet. Clean up any spills immediately and store bottles securely.
                        More frequent walks are better than one long exposure.Watch for signs of frostbite.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Tips;
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const VetSlider = ({ vets }) => {
    return (
        <div className="w-full my-5 p-4">
            <Swiper
                modules={[Pagination, Autoplay, A11y]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {vets.map((vet) => (
                    <SwiperSlide key={vet.vetId}>
                        <div className="h-[420px] bg-white shadow-lg rounded-sm overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                            <img
                                src={vet.vetImg}
                                className="w-full h-52 object-cover"
                            />
                            <div className="p-4 h-fit">
                                <h2 className="text-lg font-bold text-gray-800">{vet.vetName}</h2>
                                <p className="text-sm text-blue-600 mt-1 font-medium">{vet.specialty}</p>
                                <p className="text-sm text-gray-600 mt-1">
                                    <span className="font-semibold">Experience:</span> {vet.yearsExperience} years
                                </p>
                                <p className="text-gray-500 text-sm mt-2 line-clamp-3">
                                    {vet.description}
                                </p>
                                <p className="text-sm text-gray-700 mt-3">
                                    📞 <strong>{vet.contactPhone}</strong>
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default VetSlider;

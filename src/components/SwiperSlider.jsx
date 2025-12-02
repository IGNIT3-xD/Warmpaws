import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";

// Swiper core styles
import "swiper/css";
import "swiper/css/pagination";

const SwiperSlider = ({ slides }) => {
    return (
        <div className="w-full pt-18">
            <Swiper
                modules={[Pagination, Autoplay, A11y]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 1 },
                    1024: { slidesPerView: 1 },
                }}
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="bg-white shadow-md overflow-hidden relative">
                            <img
                                src={slide.image}
                                className="w-full h-[350px] md:h-[400px] lg:h-[500px] brightness-50 object-cover"
                            />
                            <div className='text-white text-center absolute inset-0 flex items-center justify-center flex-col gap-4 p-5'>
                                <h1 className='text-2xl lg:text-3xl font-bold'><span className='text-green-400'>WarmPaws</span> – Pet Care in Winter</h1>
                                <p className='text-white/70 md:w-2/3 lg:w-2/5 mx-auto'>A cozy winter companion platform for pet owners to ensure their furry friends stay warm, safe, and healthy during the cold season. </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SwiperSlider;

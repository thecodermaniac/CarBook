import React from 'react'
import testiImage from '../assets/hero.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

const client = [
    {
        picImage: testiImage,
        type: 'Suv'
    },
    {
        picImage: testiImage,
        type: 'Sedan'
    },
    {
        picImage: testiImage,
        type: 'Hatch back'
    },
    {
        picImage: testiImage,
        type: 'Off Road'
    }
]

const CarHero = () => {
    return (
        <div className='flex md:flex-row flex-col-reverse gap-5 relative  max-w-[1440px] h-screen'>
            <div className='md:flex-[1.5] flex justify-end items-center w-full h-full'>
                <div className='md:w-[90%] h-[60%] w-full'>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 1,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        loop={true}
                        autoplay={{ delay: 1000, disableOnInteraction: false }}
                        modules={[EffectCoverflow, Autoplay]}
                        className='h-full'
                    >
                        {client.map((value) => {
                            return (
                                <SwiperSlide className='w-1/2 relative flex items-center'>
                                    <img src={value.picImage} alt="" className="w-fit object-cover absolute z-10" />
                                    <div className='border-2 absolute w-2/3 h-full top-0 left-1/2 translate-x-[-50%] rounded-xl bg-[#d2d2d2]'>
                                        <span className='absolute bottom-2 left-1/2 translate-x-[-50%] text-xl'>{value.type}</span>
                                    </div>
                                </SwiperSlide>
                            )
                        })}

                    </Swiper>
                </div>
            </div>
            <div className="flex flex-col flex-1 justify-center items-start">
                <h1 className="2xl:text-[64px] sm:text-[40px] text-[40px] font-extrabold;">
                    Variety of Cars at your Disposal
                </h1>

                <p className="text-[27px] text-black-100 font-light mt-5">
                    With So much to choose from you never run out of options.
                </p>
                <button className='py-3 '>Book Now</button>
            </div>

        </div>
    )
}

export default CarHero
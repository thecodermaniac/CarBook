import React from 'react'
import HeroImg from '../assets/hero.png'
const Hero = () => {
    return (
        <div className='flex md:flex-row flex-col gap-5 relative h-screen'>
            <div className="flex flex-col flex-1 justify-center items-start">
                <h1 className="2xl:text-[64px] sm:text-[40px] text-[40px] font-extrabold;">
                    Find, book, rent a car—quick and super easy!
                </h1>

                <p className="text-[27px] text-black-100 font-light mt-5">
                    Streamline your car rental experience with our effortless booking
                    process.
                </p>
                <button className='py-3 '>Explore Cars</button>
            </div>
            <div className='md:flex-[1.5] flex justify-end items-center w-full '>
                <div className=' xl:w-full w-[90%]'>
                    <img src={HeroImg} alt='car image' />
                </div>
            </div>
        </div>
    )
}

export default Hero
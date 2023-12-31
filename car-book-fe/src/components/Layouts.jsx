// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

// eslint-disable-next-line react/prop-types
const Layouts = ({ children, bgColor }) => {
    return (
        <>
            <Navbar />
            <div className='flex flex-col h-[100%] min-h-screen overflow-hidden'>
                <main className={`${bgColor ? bgColor : 'white'} md:mx-12 mx-6 mb-auto max-w-[1440px] lg:mx-auto`}>{children}</main>
            </div>
            <Footer />
        </>

    )
}

export default Layouts
import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

const Layouts = ({ children, bgColor }) => {
    return (
        <>
            <Navbar />
            <div className='flex flex-col h-[100%] min-h-screen overflow-hidden'>
                <main className={`${bgColor ? bgColor : 'white'} md:mx-12 mx-6 mb-auto`}>{children}</main>
            </div>
            <Footer />
        </>

    )
}

export default Layouts
import React from 'react'
import Hero from '../components/Hero'
import ClientVerdicts from '../components/ClientVerdicts/ClientVerdicts'
import CarHero from '../components/CarHero'

const Home = () => {
    return (
        <>
            <Hero />
            <CarHero />
            <ClientVerdicts />
        </>

    )
}

export default Home
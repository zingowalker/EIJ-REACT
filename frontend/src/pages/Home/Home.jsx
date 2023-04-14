import React from 'react'
import Hero from '../../components/Hero/Hero'
import Whyus from '../../components/Whyus/Whyus'
import Testimonials from '../../components/Testimonials/Testimonials'



function Home() {
    return (
        <div className="home">
            <Hero />
            <Whyus />
            <Testimonials />
        </div>
    )
}

export default Home